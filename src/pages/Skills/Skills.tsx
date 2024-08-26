import React, { FC, memo, useCallback, useEffect, useState } from "react";
import { useQuery} from 'react-query';
import { cn } from "@bem-react/classname";

import Spinner from "../../ui/Spinner";
import { getSkills } from "../../api/platform";
import Text from "../../ui/Text";
import { SelectedType } from "../../types/common";

import './Skills.css';

const cName = cn('edit-skills');

type CheckboxProps = FC<{
    name: string;
    selected: boolean;
    onChange: (name: string) => void;
}>;

const Checkbox: CheckboxProps = memo(({name, selected, onChange}) => {
    return (
        <div className={cName('skills-block')}>
            <label htmlFor={name}>{name}</label>

            <input
                name={name}
                className={cName('chbx')}
                checked={selected}
                type="checkbox"
                onChange={() => onChange(name)}
             />
        </div>
    )}
)

interface IProps {
    title: string;
}

const Skills: FC<IProps> = ({title}) => {
    const {data, isLoading, error} = useQuery('skills', () => getSkills());

    const [skills, setSkills] = useState<SelectedType<string>[]>([]);

    useEffect(() => {
        data && setSkills(data.map(el => ({name: el.title, selected: false, id: el.id})));
    }, [data]);

    const changeSkills = useCallback((name: string) => {
        setSkills(prev => prev.map(el => el.name === name ? {...el, selected: !el.selected} : el));
    }, []);

    if (error) throw new Error('Failed to get skills');

    if(isLoading) return <Spinner/>

    if (!data) return null;

    return (
        <>
            <Text>{title}</Text>

            <div className={cName('skills')}>
                {skills?.map(({id, name, selected}) => (
                    <Checkbox
                        name={name}
                        selected={selected}
                        onChange={changeSkills}
                        key={id}
                    />
                ))}
            </div>
        </>
    )    
}

export default memo(Skills);