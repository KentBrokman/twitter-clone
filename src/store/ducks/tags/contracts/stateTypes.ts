import { LoadingState } from "../../../types";


export interface TagType {
    _id: string,
    name: string,
    count: number
}

export interface TagsStateType {
    loadingState: LoadingState,
    items: TagType[]
}