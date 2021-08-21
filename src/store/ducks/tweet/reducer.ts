import { DraftsRounded } from "@material-ui/icons";
import produce, { Draft } from "immer";
import { LoadingState } from "../../types";

import { TweetActions, TweetActionsType } from "./contracts/actionTypes";
import { TweetState } from "./contracts/stateTypes";




const initialState: TweetState = {
    tweet: null,
    loadingState: LoadingState.NEVER
}


export const tweetReducer = produce((draft: Draft<TweetState>, action: TweetActions) => {
    switch(action.type) {
        case TweetActionsType.SET_TWEET: {
            draft.tweet = action.payload
            draft.loadingState = LoadingState.LOADED
            break
        }
        case TweetActionsType.FETCH_TWEET: {
            draft.tweet = null
            draft.loadingState = LoadingState.LOADING
            break
        }
        case TweetActionsType.CLEAR_TWEET: {
            draft.tweet = null
            draft.loadingState = LoadingState.NEVER
            break
        }
        case TweetActionsType.SET_LOADING_STATUS: {
            draft.loadingState = action.payload
            break
        }
    }
}, initialState)