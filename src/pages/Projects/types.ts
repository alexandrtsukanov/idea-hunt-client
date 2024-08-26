import { FC } from "react";
import { ProjectData } from "../../types/platform";

interface IProps {
    projects: ProjectData[];
    setNewProjects: (newProjects: ProjectData[]) => void;
}

export type Props = FC<IProps>;