import React, { FC } from 'react';
import { cn } from '@bem-react/classname';
import { useParams } from 'react-router';

import { ProjectData } from '../../../../types/platform';
import { useSelector } from 'react-redux';
import ProfileProject from '../ProfileProject/ProfileProject';
import { currentProjectStagesSelector } from '../../../../store/selectors/projects';

import './ProjectsList.css';

const cName = cn('projects-list-profile');

interface IProps {
    projects: ProjectData[];
}

const ProjectsListProfile: FC<IProps> = ({projects}) => {
    const currentProjectStages = useSelector(currentProjectStagesSelector);

    const params = useParams();

    return (
        <div>
            {!params.search && <h3 className={cName('header-ideas')}>Идеи</h3>}

            <div className={cName('container')}>
                {projects.map(({title, description, team_size, id}) => (
                    <div key={id} className={cName('project')}>
                        <ProfileProject
                            title={title}
                            description={description}
                            id={id}
                            teamSize={team_size || 0}
                            allStages={currentProjectStages || []}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ProjectsListProfile;