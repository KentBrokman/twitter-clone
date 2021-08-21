import { Action } from "redux";
import { LoadingState } from "../../types";
import { FetchTweetActionType, SetLoadingStatusActionType, SetTweetActionType, TweetActionsType, ClearTweetActionType } from "./contracts/actionTypes";
import { TweetType, TweetState } from "./contracts/stateTypes";



export const setTweet = (payload: TweetState['tweet']): SetTweetActionType => ({
    type: TweetActionsType.SET_TWEET,
    payload
})
export const fetchTweet = (id: string): FetchTweetActionType => ({
    type: TweetActionsType.FETCH_TWEET,
    payload: id
})
export const clearTweet = (): ClearTweetActionType => ({
    type: TweetActionsType.CLEAR_TWEET
})
export const setTweetLoadingStatus = (payload: LoadingState.ERROR): SetLoadingStatusActionType => ({
    type: TweetActionsType.SET_LOADING_STATUS,
    payload
})


