import { ICommonData, Nullable } from "./common";
import { UserData } from "./passport";

export type ProjectData = ICommonData & {
    author_id: number,
    title: string;
    description: string;
    url: string;
    contests: string;
    stage_title: string;
    stage_id: number;
    industry: string;
    innovations: string;
    innovation_type: string;
    jobs?: Job[];
    team_size?: Nullable<number>;
    // для фильтрации
    hidden?: boolean;
};

// TODO Добавить поле "получили поддержку"
export type Project = {
    project: ProjectData;
    rating: number;
}

export type ProjectsList = {
    items: ProjectData[];
    next_page_key: string;
}

export type JobsList = {
    items: Job[];
    next_page_key: string;
}

export type UsersList = {
    items: UserData[];
    next_page_key: string;
}

export type Team = ICommonData & {
    title: string;
    project_id: ProjectData['id'];
    project: ProjectData;
};

export type ProjectTeamMember = ICommonData & {
    user_id: number;
    job_id: number;
    job: Job;
    title: string;
};

export enum ApplicationStatus {
    APPLIED = 'applied',
    ACCEPTED = 'accepted',
    DECLINED = 'declined',
};

export type Application = ICommonData & {
    user_id: number;
    job: Job;
    job_id: Job['id'];
    message: string;
    status: ApplicationStatus;
};

export type Job = ICommonData & {
    team_id: number;
    team: Team;
    title: string;
    description: string;
    open: boolean;
    job_application?: Application;
    hidden?: boolean;
    obligations: string[];
    requirements: string[];
}

export type Event = ICommonData & {};

export type ProjectStage = ICommonData & {
    title: string;
    description: string;
};

export type Vote = ICommonData & {
    user_id: number;
    subject_type: 'project' | 'user';
    subject_id: number;
};

export type Profession = ICommonData & {
    title: string;
}

export type Skill = ICommonData & {
    title: string;
    hard: boolean;
}

export interface IStats {
    num_projects: number,
    supported_projects: number,
    num_jobs: number,
}
