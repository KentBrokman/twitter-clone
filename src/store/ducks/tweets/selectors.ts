import { AppStateType } from "../../rootReducer";
import { LoadingState } from "../../types";



export const selectTweets = (state: AppStateType) => state.tweets.items

export const selectLoadingState = (state: AppStateType): LoadingState => state.tweets.loadingState
export const selectNewTweetLoadingState = ( state: AppStateType ): LoadingState => state.tweets.newTweetLoadingState

export const selectTweetsIsLoading = (state: AppStateType): boolean => selectLoadingState(state) === LoadingState.LOADING
export const selectTweetsIsLoaded = (state: AppStateType): boolean => selectLoadingState(state) === LoadingState.LOADED

export const selectNewTweetIsLoading = (state: AppStateType): boolean => selectNewTweetLoadingState(state) === LoadingState.LOADING
