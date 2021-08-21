import axios from "axios";
import { TagsStateType } from "../store/ducks/tags/contracts/stateTypes";





export const TagsApi = {
    fetchTags(): Promise<TagsStateType['items']> {
        return axios.get('/tags').then(({data}) => data)
    }
}