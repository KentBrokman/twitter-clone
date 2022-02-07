import { NewTweetPayloadType } from './../tweets/contracts/stateTypes';
import produce, { Draft } from "immer";
import { LoadingState, LogInState, ProfileUpdatingState } from "../../types";
import { UserActions, UserActionsType } from "./contracts/actionTypes";
import { UserStateType } from "./contracts/stateTypes";



const initialState: UserStateType = {
    data: null,
    status: LoadingState.NEVER,
    loginStatus: LogInState.NEVER,
    prfoileUpdateingStatus: ProfileUpdatingState.NEVER
}

export const userReducer = produce((draft: Draft<UserStateType>, action: UserActions) => {
    switch (action.type) {
        case UserActionsType.SET_USER_DATA:
            draft.data = action.payload
            break;

        case UserActionsType.SET_LOADING_STATE:
            draft.status = action.payload
            break;

        case UserActionsType.SET_LOG_IN_STATE:
            draft.loginStatus = action.payload
            break;

        case UserActionsType.SIGN_OUT:
            draft.data = null
            draft.status = LoadingState.NEVER
            break;

        case UserActionsType.SET_PROFILE_UPDATING_STATE:
            draft.prfoileUpdateingStatus = action.payload
            break;
        default:
            break;
    }
}, initialState)