import React, { ChangeEvent, FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import {cn} from '@bem-react/classname';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { createProject } from '../../api/platform';
import { getTokenFromCookies } from '../../utils/cookie';
import { CurrentProjectActions } from '../../store/types/currentProject';
import { ROUTES } from '../../utils/routes';
import { SelectedType } from '../../types/common';
import { getAuthorizedUserAction } from '../../store/actions/user';
import Button from '../../ui/Button';
import Text from '../../ui/Text';
import { industriesSelector, innovationsSelector } from '../../store/selectors/projects';

import './ProjectCreate.css';

const cName = cn('project-create');

type CheckboxProps = FC<{
    name: string;
    selected: boolean;
    onChange: (name: string) => void;
}>;

const Checkbox: CheckboxProps = memo(({name, selected, onChange}) => {
    return (
        <div>
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

const CREATE_TITLE = 'Создать проект';

function ProjectCreate() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [industriesState, setIndustriesState] = useState<SelectedType<string>[]>([]);
    const [innovationsState, setInnovationsState] = useState<SelectedType<string>[]>([]);

    const industries = useSelector(industriesSelector);
    const innovations = useSelector(innovationsSelector);

    useEffect(() => {
        if (industries) {
            setIndustriesState(industries.map(el => ({name: el, selected: false})));
        }

        if (innovations) {
            setIndustriesState(innovations.map(el => ({name: el, selected: false})));
        }
    }, [industries, innovations]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    } 
    const changeDescription = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
    }
    const changeUrl = (event: ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value)
    }

    const changeIndustries = useCallback((name: string) => {
        setIndustriesState(prev => prev.map(el => el.name === name ? {...el, selected: !el.selected} : el));
    }, []);

    const changeInnovations = useCallback((name: string) => {
        setInnovationsState(prev => prev.map(el => el.name === name ? {...el, selected: !el.selected} : el));
    }, []);

    const handleCreateProject = useCallback(() => {
        createProject(
            {title, description, url}, 
            getTokenFromCookies(),
        )
            .then(project => {
                dispatch({
                    type: CurrentProjectActions.SET_PROJECT,
                    payload: project,
                });

                dispatch<any>(getAuthorizedUserAction(getTokenFromCookies()));
            })
            .then(() => {
                navigate(`${ROUTES.PROJECT}/created`);
            })
    }, [title, description, url]);

    const innovationsToShow = useMemo(() => (
        <div className={cName('innovations')}>
            <Text className={cName('header')}>Тип инновации</Text>

            {innovationsState.map(({name, selected}) => (
                <Checkbox
                    key={name}
                    name={name}
                    selected={selected}
                    onChange={changeInnovations}
                />
            ))}
        </div>
    ), [innovationsState]);

    const industriesToShow = useMemo(() => (
        <div className={cName('industries')}>
            <Text className={cName('header-mb')}>Индустрия</Text>

            {industriesState.map(({name, selected}) => (
                <Checkbox
                    key={name}
                    name={name}
                    selected={selected}
                    onChange={changeIndustries}
                />
            ))}
        </div>
    ), [industriesState]);
        
    return (
        <div className={cName()}>
            <div className={cName('blocks')}>
                <div className={cName('title')}>
                    <label htmlFor="title" className={cName('title-label')}>
                        <Text className={cName('header')}>Название</Text>
                    </label>

                    <input
                        className={cName('input')}
                        name="title"
                        type="text"
                        value={title}
                        placeholder="Придумайте название"
                        onChange={changeTitle}
                    />
                </div>

                <div className={cName('title')}>
                    <label htmlFor="description" className={cName('description-label')}>
                        <Text className={cName('header')}>Описание</Text>
                    </label>

                    <input
                        className={cName('input', {high: true})}
                        name="description"
                        type="text"
                        value={description}
                        placeholder="О чём Ваша идея?"
                        onChange={changeDescription}
                    />
                </div>

                <div className={cName('title')}>
                    <label htmlFor="url" className={cName('url-label')}>
                        <Text className={cName('header')}>Ссылка на проект</Text>
                    </label>

                    <input
                        className={cName('input')}
                        name="url"
                        type="text"
                        value={url}
                        placeholder="Ссылка на проект"
                        onChange={changeUrl}
                    />
                </div>

                <div className={cName('checkboxes')}>
                    {innovationsToShow}

                    {industriesToShow}
                </div>
            </div>

            <Button onClick={handleCreateProject}>
                {CREATE_TITLE}
            </Button>
        </div>
    )
}

export default ProjectCreate;