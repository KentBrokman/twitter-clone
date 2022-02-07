import { ImageObj } from "../../../../components/tweets/AddTweetForm";
import { LoadingState } from "../../../types";
import { UserType } from "../../user/contracts/stateTypes";

export interface TweetImageInterface {
    _id: string,
    cloudinary_id: string,
    cloudinary_url: string
}

export interface TweetType {
    id?: number,
    _id: string,
    text: string,
    createdAt: string,
    user: UserType,
    images: TweetImageInterface[] | []
}
export interface TweetsState {
    items: TweetType[],
    loadingState: LoadingState,
    newTweetLoadingState: LoadingState,
    deleteTweetLoadingState: LoadingState
}
export interface NewTweetPayloadType {
    text: string, 
    images: ImageObj[]
}