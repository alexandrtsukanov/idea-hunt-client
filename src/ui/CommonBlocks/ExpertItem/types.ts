import { FC } from "react";
import { User } from "../../../types/passport";

interface IProps {
    user:  User['user'];
    rating?: User['rating'];
    canBeInvited?: string 
}

export type Props = FC<IProps>;