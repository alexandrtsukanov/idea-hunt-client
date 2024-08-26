import { ProjectStage } from "../types/platform";

export const getCompleteStages = (stages: ProjectStage[], stage: number):ProjectStage[] => {
    return stages.filter(el => el.id <= stage);
}