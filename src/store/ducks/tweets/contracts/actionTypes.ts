

import { Action } from "redux";
import { LoadingState } from "../../../types";
import { TweetsState, TweetType } from "./stateTypes";

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATUS = 'tweets/SET_LOADING_STATUS',
    ADD_NEW_TWEET = 'tweets/ADD_NEW_TWEET',
    SET_NEW_TWEET = 'tweets/SET_NEW_TWEET',
    SET_NEW_TWEET_LOADING = 'tweets/SET_NEW_TWEET_LOADING'
}

export interface SetTweetsActionType extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEETS,
    payload: TweetsState['items']
}
export interface FetchTweetsActionType extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_TWEETS
}
export interface SetLoadingStatusActionType extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_LOADING_STATUS,
    payload: LoadingState.ERROR
}
export interface AddNewTweetActionType extends Action<TweetsActionsType> {
    type: TweetsActionsType.ADD_NEW_TWEET,
    payload: string
}
export interface SetNewTweetActionType extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_NEW_TWEET,
    payload: TweetType
}
export interface SetNewTweetLoadingActionType extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_NEW_TWEET_LOADING,
}

export type TweetsActions = SetTweetsActionType 
| FetchTweetsActionType | SetLoadingStatusActionType 
| AddNewTweetActionType |SetNewTweetActionType | SetNewTweetLoadingActionType