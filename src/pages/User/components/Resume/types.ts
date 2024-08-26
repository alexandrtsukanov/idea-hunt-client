import { FC } from "react";
import { UserData } from "../../../../types/passport";

interface IProps {
    user: UserData;
}

export type Props = FC<IProps>;