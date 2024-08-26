import { CommonAction } from "../../types/common";
import { User } from "../../types/passport";

export enum UsersActions {
    SET_USERS = 'SET_USERS',
};

type SetUsers = CommonAction<UsersActions.SET_USERS, User[]>

export type UsersAction = 
    | SetUsers;
    