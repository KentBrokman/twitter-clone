import { LoadingState } from "../../../types";

export interface TweetType {
    id?: number,
    _id: string,
    text: string,
    createdAt: string,
    user: {
        fullName: string,
        shortName: string,
        avatarUrl: string,
    },
}
export interface TweetsState {
    items: TweetType[],
    loadingState: LoadingState,
    newTweetLoadingState: LoadingState
}