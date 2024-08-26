import { FC } from "react";
import { Job } from "../../../../types/platform";

interface IProps {
    vacancies: Job[]
}

export type Props = FC<IProps>;