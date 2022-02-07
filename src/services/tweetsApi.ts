import { NewTweetPayloadType } from './../store/ducks/tweets/contracts/stateTypes';

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
    async fetchOwnTweets(id: string): Promise<TweetType[]> {
        const { data } = await axios.get<Response<TweetType[]>>(`/tweets/${id}`);
        return data.data;
    },
    async fetchTweet(id: string): Promise<TweetType> {
        const { data } = await axios.get<Response<TweetType>>(`/tweet/${id}`);
        return data.data;
    },
    async addNewTweet(payload: NewTweetPayloadType): Promise<TweetType> {
        const formData = new FormData()
        formData.append('text', payload.text)
        for (let image of payload.images) {
            formData.append('tweetImage', image.file)
        }
        const { data } = await axios.post<Response<TweetType>>('/tweets', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
        return data.data;
    },
    async deleteTweet(id: string): Promise<TweetType> {
        const {data} = await axios.delete<Response<TweetType>>(`/tweets/${id}`)
        return data.data
    }
}
