import { CommonAction } from "../../types/common";
import { Application } from "../../types/platform";

export enum ApplicationsActions {
    SET_APPLICATIONS = 'SET_APPLICATIONS',
};

export type SetApplications = CommonAction<ApplicationsActions.SET_APPLICATIONS, Application[]>

export type ApplicationsAction = 
    | SetApplications;
    