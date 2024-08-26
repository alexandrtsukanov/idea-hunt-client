import { Nullable } from "../../types/common";
import { Job, Application, Team, ProjectData, ProjectStage } from "../../types/platform";
import { UserData } from "../../types/passport";

export interface IBaseStore {
    authUser:  Nullable<UserData>;
    currentUser: Nullable<UserData>;
    currentProject: Nullable<ProjectData>;
    currentJob: Nullable<Job>;
    currentApplications: Nullable<Application[]>;
    currentUserRating: Nullable<number>;
    currentIndustries: Nullable<string[]>;
    currentInnovations: Nullable<string[]>;
    currentStages: Nullable<ProjectStage[]>;
    teams: Team[];
}