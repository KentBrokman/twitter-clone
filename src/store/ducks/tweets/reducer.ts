import produce, { Draft } from "immer";
import { LoadingState } from "../../types";

import { TweetsActions, TweetsActionsType } from "./contracts/actionTypes";
import { TweetsState } from "./contracts/stateTypes";




const initialState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER,
    newTweetLoadingState: LoadingState.NEVER,
    deleteTweetLoadingState: LoadingState.NEVER
}


export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
    switch(action.type) {
        case TweetsActionsType.SET_TWEETS: {
            draft.items = action.payload
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
        case TweetsActionsType.SET_NEW_TWEET: {
            draft.items.unshift(action.payload)
            draft.newTweetLoadingState = LoadingState.LOADED
            break
        }
        case TweetsActionsType.SET_NEW_TWEET_LOADING: {
            draft.newTweetLoadingState = LoadingState.LOADING
            break
        }
        case TweetsActionsType.SET_TWEET_DELETED: {
            
            draft.items = draft.items.filter(item => item._id !== action.payload)
            draft.deleteTweetLoadingState = LoadingState.NEVER
            break
        }
        case TweetsActionsType.SET_TWEET_DELETED_LOADING: {
            draft.deleteTweetLoadingState = LoadingState.LOADING
            break
        }
    }
}, initialState)