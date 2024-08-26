import { CommonAction } from "../../types/common";
import { Job } from "../../types/platform";

export enum JobsActions {
    SET_JOBS = 'SET_JOBS',
};

type SetJobs = CommonAction<JobsActions.SET_JOBS, Job[]>

export type JobsAction = 
    | SetJobs;
    