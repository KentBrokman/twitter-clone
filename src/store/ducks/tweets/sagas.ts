import { TweetsActionsType, AddNewTweetActionType, FetchOwnTweetsActionType, DeleteTweetActionType } from "./contracts/actionTypes"
import { all, call, CallEffect, put, SagaReturnType, StrictEffect, takeEvery, takeLatest } from "redux-saga/effects"
import { TweetsApi } from "../../../services/tweetsApi"
import { setNewTweet, setTweets, setTweetsLoadingStatus, setNewTweetLoading, setTweetDeletedLoading, setTweetDeleted, deleteTweet } from "./actionCreators"
import { TweetsState } from "./contracts/stateTypes"
import { LoadingState } from "../../types"
// import {AddNewTweetActionType} from "./"

type FetchTweetsReturnType = SagaReturnType<typeof TweetsApi.fetchTweets>
type FetchOwnTweetsReturnType = SagaReturnType<typeof TweetsApi.fetchOwnTweets>
type AddNewTweetReturnType = SagaReturnType<typeof TweetsApi.addNewTweet>
type DeleteTweetReturnType = SagaReturnType<typeof TweetsApi.deleteTweet>

export function* fetchTweetsRequest() {

    try {
        const items : FetchTweetsReturnType = yield call(TweetsApi.fetchTweets)
        yield put(setTweets(items))
    } catch (error) {
        yield put(setTweetsLoadingStatus(LoadingState.ERROR))
    }
}
export function* fetchOwnTweetsRequest({payload: id}: FetchOwnTweetsActionType) {

    try {
        yield put(setTweetsLoadingStatus(LoadingState.LOADING))
        const items : FetchOwnTweetsReturnType = yield call(TweetsApi.fetchOwnTweets, id)
        yield put(setTweets(items))
    } catch (error) {
        yield console.log(error)
        yield put(setTweetsLoadingStatus(LoadingState.ERROR))
    }
}

export function* addNewTweet({payload}: AddNewTweetActionType) {
    try {
        yield put(setNewTweetLoading())
        const newTweet: AddNewTweetReturnType = yield call(TweetsApi.addNewTweet, payload)
        if (newTweet === null) throw ("Some error")
        yield put(setNewTweet(newTweet))
    } catch (error) {
        console.log(error)
    }
}

export function* fetchDeleteTweet({payload: id}: DeleteTweetActionType) {
    try {
        yield put(setTweetDeletedLoading())
        const oldTweet: DeleteTweetReturnType = yield call(TweetsApi.deleteTweet, id)
        yield put(setTweetDeleted(id))
    } catch (error) {
        console.log(error)
    }
}

export function* tweetsSaga() {
    
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeLatest(TweetsActionsType.FETCH_OWN_TWEETS, fetchOwnTweetsRequest)
    yield takeLatest(TweetsActionsType.ADD_NEW_TWEET, addNewTweet)
    yield takeLatest(TweetsActionsType.DELETE_TWEET, fetchDeleteTweet)
}