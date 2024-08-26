import { ChangeEvent, FC } from "react";

interface IProps {
    filterByIndustries: (event: ChangeEvent<HTMLInputElement>) => void;
    filterByInnivationTypes: (event: ChangeEvent<HTMLInputElement>) => void;
    filterByTags: (event: ChangeEvent<HTMLInputElement>) => void;
    filterByTeamSize: (event: ChangeEvent<HTMLInputElement>) => void;
    filterIsActive: (event: ChangeEvent<HTMLInputElement>) => void;
    filterIsNotActive: (event: ChangeEvent<HTMLInputElement>) => void;
}

export type Props = FC<IProps>;