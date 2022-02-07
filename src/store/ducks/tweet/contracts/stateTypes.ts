import { LoadingState } from "../../../types";
import { TweetImageInterface } from "../../tweets/contracts/stateTypes";
import { UserType } from "../../user/contracts/stateTypes";

export interface TweetType {
    id?: number,
    _id: string,
    text: string,
    createdAt: string,
    user: UserType,
    images: TweetImageInterface[] | []
}
export interface TweetState {
    tweet: TweetType | null,
    loadingState: LoadingState,
}