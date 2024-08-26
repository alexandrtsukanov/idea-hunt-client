import { FC } from "react";
import { Project } from "../../../../types/platform";

interface IProps {
    projects: Project[];
}

export type Props = FC<IProps>;