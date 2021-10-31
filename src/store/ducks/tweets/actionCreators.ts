import { Action } from "redux";
import { LoadingState } from "../../types";
import { FetchTweetsActionType, SetLoadingStatusActionType, 
    SetTweetsActionType, TweetsActionsType, 
    AddNewTweetActionType, SetNewTweetActionType, SetNewTweetLoadingActionType } from "./contracts/actionTypes";
import { TweetType, TweetsState } from "./contracts/stateTypes";



export const setTweets = (payload: TweetsState['items']): SetTweetsActionType => ({
    type: TweetsActionsType.SET_TWEETS,
    payload
})
export const fetchTweets = (): FetchTweetsActionType => ({
    type: TweetsActionsType.FETCH_TWEETS
})
export const setTweetsLoadingStatus = (payload: LoadingState.ERROR): SetLoadingStatusActionType => ({
    type: TweetsActionsType.SET_LOADING_STATUS,
    payload
})
export const addNewTweet = (payload: string): AddNewTweetActionType => ({
    type: TweetsActionsType.ADD_NEW_TWEET,
    payload
})
export const setNewTweet = (payload: TweetType): SetNewTweetActionType => ({
    type: TweetsActionsType.SET_NEW_TWEET,
    payload
})
export const setNewTweetLoading = (): SetNewTweetLoadingActionType => ({
    type: TweetsActionsType.SET_NEW_TWEET_LOADING
})



