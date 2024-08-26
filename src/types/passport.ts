import { ICommonData, Nullable } from "./common";
import { ProjectData } from "./platform";

export type UserData = ICommonData & {
    email: string,
    password_hash: string,
    avatar_url: string,
    fio: string,
    birthday: Nullable<string>,
    gender: Nullable<string>,
    phone: Nullable<string>,
    country: Nullable<string>,
    city: Nullable<string>,
    education: Nullable<string>,
    job: Nullable<string>,
    about: Nullable<string>,
    admin: Nullable<boolean>,
    projects?: ProjectData[],
    profession: string;
    profession_id: number;
    skills: string[];
    skill_ids: number[];
    looking_for_job: boolean;
    looking_for_hackathon: boolean;
    // для фильтрации
    hidden?: boolean;
}

export type User = {
    user: UserData;
    rating: number;
}