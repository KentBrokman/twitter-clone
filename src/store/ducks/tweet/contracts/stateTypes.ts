import { LoadingState } from "../../../types";

export interface TweetType {
    id?: number,
    _id: string,
    text: string,
    user: {
        fullName: string,
        shortName: string,
        avatarUrl: string,
    },
}
export interface TweetState {
    tweet: TweetType | null,
    loadingState: LoadingState,
}