
import produce, { Draft } from "immer"
import { LoadingState } from "../../types"
import { TagsActions, TagsActionTypes } from "./contracts/actionTypes"
import { TagsStateType } from "./contracts/stateTypes"


const initialState = {
    items: [],
    loadingState: LoadingState.NEVER
}



export const tagsReducer = produce((draft: Draft<TagsStateType>, action: TagsActions) => {
    switch(action.type) {
        case TagsActionTypes.SET_TAGS: {
            draft.items = action.payload
            draft.loadingState = LoadingState.LOADED
            break
        }
        case TagsActionTypes.FETCH_TAGS: {
            draft.items = []
            draft.loadingState = LoadingState.LOADING
            break
        }
        case TagsActionTypes.SET_LOADING_STATUS: {
            draft.loadingState = action.payload
            break
        }
    }
}, initialState)