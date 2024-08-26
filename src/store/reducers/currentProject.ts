import { CurrentProjectActions, CurrentProjectAction } from "../types/currentProject";

import { IBaseStore } from "../types/store";
import { lsGetCurrentProject } from "../../utils/storage";

type ProjectState = IBaseStore['currentProject'];

const initialState: ProjectState = lsGetCurrentProject() || null;

export const currentProjectReducer = (store: ProjectState = initialState, action: CurrentProjectAction) => {
    const {type, payload} = action;

    switch (type) {
        case CurrentProjectActions.SET_PROJECT:
            return payload;

        default:
            return store;
        }
};