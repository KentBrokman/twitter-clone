

import { Action } from "redux";
import { LoadingState } from "../../../types";
import { NewTweetPayloadType, TweetsState, TweetType } from "./stateTypes";

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    FETCH_OWN_TWEETS = 'tweets/FETCH_OWN_TWEETS',
    SET_LOADING_STATUS = 'tweets/SET_LOADING_STATUS',
    ADD_NEW_TWEET = 'tweets/ADD_NEW_TWEET',
    SET_NEW_TWEET = 'tweets/SET_NEW_TWEET',
    SET_NEW_TWEET_LOADING = 'tweets/SET_NEW_TWEET_LOADING',
    DELETE_TWEET = 'tweets/DELETE_TWEET',
    SET_TWEET_DELETED_LOADING = 'tweets/SET_TWEET_DELETED_LOADING',
    SET_TWEET_DELETED = 'tweets/SET_TWEET_DELETED'
}

export interface SetTweetsActionType extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEETS,
    payload: TweetsState['items']
}
export interface FetchTweetsActionType extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_TWEETS
}
export interface FetchOwnTweetsActionType extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_OWN_TWEETS,
    payload: string
}
export interface SetLoadingStatusActionType extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_LOADING_STATUS,
    payload: LoadingState
}
export interface AddNewTweetActionType extends Action<TweetsActionsType> {
    type: TweetsActionsType.ADD_NEW_TWEET,
    payload: NewTweetPayloadType
}
export interface SetNewTweetActionType extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_NEW_TWEET,
    payload: TweetType
}
export interface SetNewTweetLoadingActionType extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_NEW_TWEET_LOADING,
}
export interface DeleteTweetActionType extends Action<TweetsActionsType> {
    type: TweetsActionsType.DELETE_TWEET,
    payload: string
}
export interface SetTweetDeletedActionType extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEET_DELETED,
    payload: string
}
export interface SetTweetDeletedLoadingActionType extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEET_DELETED_LOADING
}

export type TweetsActions = SetTweetsActionType 
| FetchTweetsActionType | SetLoadingStatusActionType 
| AddNewTweetActionType |SetNewTweetActionType 
| SetNewTweetLoadingActionType | FetchOwnTweetsActionType 
| SetTweetDeletedActionType | DeleteTweetActionType 
| SetTweetDeletedLoadingActionType