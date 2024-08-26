import { FC } from "react";
import { UserData } from "../../../../types/passport";

interface IProps {
    user: UserData;
    rating?: number | null;
}

export type Props = FC<IProps>;