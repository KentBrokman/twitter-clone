import { AppStateType } from "../../rootReducer";
import { LoadingState } from "../../types";



export const selectTweets = (state: AppStateType) => state.tweets.items

export const selectLoadingState = (state: AppStateType): LoadingState => state.tweets.loadingState

export const selectTweetsIsLoading = (state: AppStateType): boolean => selectLoadingState(state) === LoadingState.LOADING
export const selectTweetsIsLoaded = (state: AppStateType): boolean => selectLoadingState(state) === LoadingState.LOADED
