
import { Action } from "redux";
import { LoadingState } from "../../../types";
import { TweetState } from "./stateTypes";

export enum TweetActionsType {
    SET_TWEET = 'tweet/SET_TWEET',
    FETCH_TWEET = 'tweet/FETCH_TWEET',
    SET_LOADING_STATUS = 'tweet/SET_LOADING_STATUS',
    CLEAR_TWEET = 'tweet/CLEAR_TWEET'
}

export interface SetTweetActionType extends Action<TweetActionsType> {
    type: TweetActionsType.SET_TWEET,
    payload: TweetState['tweet']
}
export interface FetchTweetActionType extends Action<TweetActionsType> {
    type: TweetActionsType.FETCH_TWEET,
    payload: string
}
export interface ClearTweetActionType extends Action<TweetActionsType> {
    type: TweetActionsType.CLEAR_TWEET
}
export interface SetLoadingStatusActionType extends Action<TweetActionsType> {
    type: TweetActionsType.SET_LOADING_STATUS,
    payload: LoadingState.ERROR
}

export type TweetActions = SetTweetActionType | FetchTweetActionType | SetLoadingStatusActionType | ClearTweetActionType