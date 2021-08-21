import { call, put, SagaReturnType, takeLatest } from "redux-saga/effects";
import { TagsApi } from "../../../services/tagsApi";
import { LoadingState } from "../../types";
import { setTags, setTagsLoadingStatus } from "./actionCreators";
import { TagsActionTypes } from "./contracts/actionTypes";


type FetchTagsReturnType = SagaReturnType<typeof TagsApi.fetchTags>


export function* fetchTagsRequest() {
    try {
        
        const items: FetchTagsReturnType = yield call(TagsApi.fetchTags)
        yield put(setTags(items))
    } catch (error) {
        yield put(setTagsLoadingStatus(LoadingState.ERROR))
    }
}

export function* tagsSaga() {
    yield takeLatest(TagsActionTypes.FETCH_TAGS, fetchTagsRequest)
}