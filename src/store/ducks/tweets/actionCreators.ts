
import { LoadingState } from "../../types";
import { FetchTweetsActionType, FetchOwnTweetsActionType, SetLoadingStatusActionType, 
    SetTweetsActionType, TweetsActionsType, 
    AddNewTweetActionType, SetNewTweetActionType, SetNewTweetLoadingActionType, SetTweetDeletedActionType, SetTweetDeletedLoadingActionType, DeleteTweetActionType } from "./contracts/actionTypes";
import { TweetType, TweetsState, NewTweetPayloadType } from "./contracts/stateTypes";



export const setTweets = (payload: TweetsState['items']): SetTweetsActionType => ({
    type: TweetsActionsType.SET_TWEETS,
    payload
})
export const fetchTweets = (): FetchTweetsActionType => ({
    type: TweetsActionsType.FETCH_TWEETS
})
export const fetchOwnTweets = (id: string): FetchOwnTweetsActionType => ({
    type: TweetsActionsType.FETCH_OWN_TWEETS,
    payload: id
})
export const setTweetsLoadingStatus = (payload: LoadingState): SetLoadingStatusActionType => ({
    type: TweetsActionsType.SET_LOADING_STATUS,
    payload
})
export const addNewTweet = (payload: NewTweetPayloadType): AddNewTweetActionType => ({
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
export const deleteTweet = (id: string): DeleteTweetActionType => ({
    type: TweetsActionsType.DELETE_TWEET,
    payload: id
})
export const setTweetDeleted = (id: string): SetTweetDeletedActionType => ({
    type: TweetsActionsType.SET_TWEET_DELETED,
    payload: id
})
export const setTweetDeletedLoading = (): SetTweetDeletedLoadingActionType => ({
    type: TweetsActionsType.SET_TWEET_DELETED_LOADING
})




