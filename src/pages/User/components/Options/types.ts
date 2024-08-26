import { FC } from "react";
import { UserOption } from "../../consts";

interface IProps {
    currentOption: UserOption,
    setOptions: (point: UserOption) => void;
}

export type Props = FC<IProps>;