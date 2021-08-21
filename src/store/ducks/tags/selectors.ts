import { AppStateType } from "../../rootReducer";
import { LoadingState } from "../../types";
import { TagsStateType } from "./contracts/stateTypes";


export const selectTags = (state: AppStateType): TagsStateType => state.tags

export const selectIsTagsLoaded = (state: AppStateType): boolean => state.tags.loadingState === LoadingState.LOADED