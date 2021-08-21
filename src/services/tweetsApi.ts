import axios from "axios";
import { TweetState } from "../store/ducks/tweet/contracts/stateTypes";
import { TweetsState } from "../store/ducks/tweets/contracts/stateTypes";




export const TweetsApi = {
    fetchTweets(): Promise<TweetsState['items']> {
        return axios.get('/tweets').then(({ data }) => data)
    },
    fetchTweet(id: string): Promise<TweetState['tweet']> {
        return axios.get(`/tweets?_id=${id}`).then(({ data }) => {
            return data[0]
        })
    },
    addNewTweet(text: string): Promise<TweetState['tweet']> {
        const tweetBody = {
            _id: Math.random().toString(36).substr(2),
            text: text,
            user: {
                fullName: "Test Tweet",
                shortName: "testtweet",
                avatarUrl: "https://source.unsplash.com/user/erondu/100x100"
            }
        }
        return axios.post('/tweets', tweetBody).then(({data}) => {
            return data
        })
    }
}
