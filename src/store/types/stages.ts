import { CommonAction } from "../../types/common";
import { ProjectStage } from "../../types/platform";

export enum StagesActions {
    SET_STAGES = 'SET_STAGES',
};

type SetStages = CommonAction<StagesActions.SET_STAGES, ProjectStage[] | null>

export type StagesAction = 
    | SetStages;
    