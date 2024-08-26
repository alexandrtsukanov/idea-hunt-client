import { currentJobAction, currentJobActions } from "../types/currentJob";

import { IBaseStore } from "../types/store";
import { lsGetCurrentJob } from "../../utils/storage";

type CurrentJobState = IBaseStore['currentJob'];

const initialState: CurrentJobState = lsGetCurrentJob() || null;

export const currentJobReducer = (store: CurrentJobState = initialState, action: currentJobAction) => {
    const {type, payload} = action;

    switch (type) {
        case currentJobActions.SET_ACTIVE_JOB:
            return payload;
    
        default:
            return store;
        }
};