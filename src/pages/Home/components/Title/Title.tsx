import React, { FC, memo } from 'react';
import {cn} from '@bem-react/classname';

import { CARD_TITLES, TITLE } from './consts';
import { IStats } from '../../../../types/platform';
import Card from '../../../../ui/Card';
import Text from '../../../../ui/Text';

import './Title.css';

const cName = cn('title-home-page');

interface IProps {
    stats: IStats;
}

const TitleHomePage: FC<IProps> = ({stats}) => {
    return (
        <div className={cName()}>
            <Text type="large" className={cName('title')}>{TITLE}</Text>

            <div className={cName('container')}>
                {Object.entries(stats)
                    .map(([key, value]) => (
                        <Card key={key} className={cName('card')}>
                            <div className={cName('val')}>{value}</div>
                            
                            <div className={cName('item')}>{CARD_TITLES[key as keyof IStats]}</div>
                        </Card>
                ))}
            </div>
        </div>
    )
}

export default memo(TitleHomePage);