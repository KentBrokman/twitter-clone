
import {axios} from "../core/axios";
import { TweetType } from "../store/ducks/tweets/contracts/stateTypes";


interface Response<T> {
    status: string;
    data: T;
}

export const TweetsApi = {
    async fetchTweets(): Promise<TweetType[]> {
        const { data } = await axios.get<Response<TweetType[]>>('/tweets');
        return data.data;
    },
    async fetchTweet(id: string): Promise<TweetType> {
        const { data } = await axios.get<Response<TweetType>>(`/tweets/${id}`);
        return data.data;
    },
    async addNewTweet(payload: string): Promise<TweetType> {
        const { data } = await axios.post<Response<TweetType>>('/tweets', {text: payload});
        return data.data;
    }
}
