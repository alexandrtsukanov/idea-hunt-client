import { FC } from "react";
import { Job } from "../../../types/platform";

interface IProps {
    title: Job['title'],
    description: Job['description'],
    application: Job['job_application'];
    id: Job['id'],   
}

export type Props = FC<IProps>;