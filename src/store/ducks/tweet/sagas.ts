import { FetchTweetActionType, TweetActionsType } from "./contracts/actionTypes"
import { all, call, CallEffect, put, SagaReturnType, StrictEffect, takeEvery, takeLatest } from "redux-saga/effects"
import { TweetsApi } from "../../../services/tweetsApi"
import { setTweet, setTweetLoadingStatus } from "./actionCreators"
import { TweetState } from "./contracts/stateTypes"
import { LoadingState } from "../../types"

type FetchTweetReturnType = SagaReturnType<typeof TweetsApi.fetchTweet>

export function* fetchTweetRequest({payload: id}: FetchTweetActionType) {
    try {
        const tweet : FetchTweetReturnType = yield call(TweetsApi.fetchTweet, id)
        yield put(setTweet(tweet))
    } catch (error) {
        yield put(setTweetLoadingStatus(LoadingState.ERROR))
    }
}

export function* tweetSaga() {
    
    yield takeLatest(TweetActionsType.FETCH_TWEET, fetchTweetRequest)
}