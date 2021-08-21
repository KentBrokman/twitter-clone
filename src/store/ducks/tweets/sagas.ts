import { TweetsActionsType, AddNewTweetActionType } from "./contracts/actionTypes"
import { all, call, CallEffect, put, SagaReturnType, StrictEffect, takeEvery, takeLatest } from "redux-saga/effects"
import { TweetsApi } from "../../../services/tweetsApi"
import { setNewTweet, setTweets, setTweetsLoadingStatus } from "./actionCreators"
import { TweetsState } from "./contracts/stateTypes"
import { LoadingState } from "../../types"
// import {AddNewTweetActionType} from "./"

type FetchTweetsReturnType = SagaReturnType<typeof TweetsApi.fetchTweets>
type AddNewTweetReturnType = SagaReturnType<typeof TweetsApi.addNewTweet>

export function* fetchTweetsRequest() {

    try {
        const items : FetchTweetsReturnType = yield call(TweetsApi.fetchTweets)
        yield put(setTweets(items))
    } catch (error) {
        yield put(setTweetsLoadingStatus(LoadingState.ERROR))
    }
}

export function* addNewTweet({payload}: AddNewTweetActionType) {
    try {
        const newTweet: AddNewTweetReturnType = yield call(TweetsApi.addNewTweet, payload)
        if (newTweet === null) throw ("Some error")
        yield put(setNewTweet(newTweet))
    } catch (error) {
        console.log(error)
    }
}

export function* tweetsSaga() {
    
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeLatest(TweetsActionsType.ADD_NEW_TWEET, addNewTweet)
}