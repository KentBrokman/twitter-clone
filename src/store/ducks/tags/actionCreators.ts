
import { LoadingState } from "../../types";
import { FetchTagsActionType, SetTagsActionType, TagsActionTypes } from "./contracts/actionTypes";
import { TagsStateType } from "./contracts/stateTypes";


export const setTags = (payload: TagsStateType['items']): SetTagsActionType => ({
    type: TagsActionTypes.SET_TAGS,
    payload
})

export const fetchTags = (): FetchTagsActionType => ({
    type: TagsActionTypes.FETCH_TAGS
})

export const setTagsLoadingStatus = (payload: LoadingState.ERROR) => ({
    type: TagsActionTypes.SET_LOADING_STATUS,
    payload
})

