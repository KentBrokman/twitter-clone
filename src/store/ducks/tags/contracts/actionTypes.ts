import { Action } from "redux";
import { LoadingState } from "../../../types";
import { TagsStateType } from "./stateTypes";



export enum TagsActionTypes {
    SET_TAGS = 'SET_TAGS',
    FETCH_TAGS = 'FETCH_TAGS',
    SET_LOADING_STATUS = 'SET_LOADING_STATUS'
}

export interface SetTagsActionType extends Action<TagsActionTypes> {
    type: TagsActionTypes.SET_TAGS,
    payload: TagsStateType['items']
}

export interface FetchTagsActionType extends Action<TagsActionTypes> {
    type: TagsActionTypes.FETCH_TAGS
}

export interface SetLoadingStatusActionType extends Action<TagsActionTypes> {
    type: TagsActionTypes.SET_LOADING_STATUS,
    payload: LoadingState.ERROR
}

export type TagsActions = SetTagsActionType | FetchTagsActionType | SetLoadingStatusActionType