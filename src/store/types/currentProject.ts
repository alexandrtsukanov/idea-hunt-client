import { CommonAction } from '../../types/common';
import { ProjectData } from '../../types/platform';

export enum CurrentProjectActions {
    SET_PROJECT = 'SET_PROJECT',
};

export type SetProject = CommonAction<CurrentProjectActions.SET_PROJECT, ProjectData | null>;

export type CurrentProjectAction = 
    | SetProject
