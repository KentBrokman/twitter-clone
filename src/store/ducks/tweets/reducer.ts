import produce, { Draft } from "immer";
import { LoadingState } from "../../types";

import { TweetsActions, TweetsActionsType } from "./contracts/actionTypes";
import { TweetsState } from "./contracts/stateTypes";




const initialState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER
}


export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
    switch(action.type) {
        case TweetsActionsType.SET_TWEETS: {
            draft.items = action.payload.reverse()
            draft.loadingState = LoadingState.LOADED
            break
        }
        case TweetsActionsType.FETCH_TWEETS: {
            draft.items = []
            draft.loadingState = LoadingState.LOADING
            break
        }
        case TweetsActionsType.SET_LOADING_STATUS: {
            draft.loadingState = action.payload
            break
        }
    }
}, initialState)