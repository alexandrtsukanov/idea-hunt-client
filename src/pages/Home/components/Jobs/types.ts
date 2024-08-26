import { FC } from "react";
import { Job } from "../../../../types/platform";

interface IProps {
    jobs: Job[];
}

export type Props = FC<IProps>;