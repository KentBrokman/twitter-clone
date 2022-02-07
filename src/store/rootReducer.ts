import { combineReducers } from "redux";
import { tagsReducer } from "./ducks/tags/reducer";
import { tweetReducer } from "./ducks/tweet/reducer";
import { tweetsReducer } from "./ducks/tweets/reducer";
import { userReducer } from "./ducks/user/reducer";



export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    tags: tagsReducer,
    tweet: tweetReducer,
    user: userReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>