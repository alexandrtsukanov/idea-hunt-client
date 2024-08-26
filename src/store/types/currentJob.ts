import { CommonAction } from "../../types/common";
import { Job } from "../../types/platform";

export enum currentJobActions {
    SET_ACTIVE_JOB = 'SET_ACTIVE_JOB',
};

export type SetcurrentJob = CommonAction<currentJobActions.SET_ACTIVE_JOB, Job | null>

export type currentJobAction = 
    | SetcurrentJob;
    