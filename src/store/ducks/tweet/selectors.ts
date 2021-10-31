import { AppStateType } from "../../rootReducer";
import { LoadingState } from "../../types";



export const selectTweet = (state: AppStateType) => {
    return state.tweet.tweet
}

export const selectLoadingState = (state: AppStateType): LoadingState => state.tweet.loadingState

export const selectTweetIsLoading = (state: AppStateType): boolean => selectLoadingState(state) === LoadingState.LOADING
export const selectTweetIsLoaded = (state: AppStateType): boolean => selectLoadingState(state) === LoadingState.LOADED
