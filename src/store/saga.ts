import { tweetsSaga } from "./ducks/tweets/sagas";
import { all } from "redux-saga/effects"
import { tagsSaga } from "./ducks/tags/sagas";
import { tweetSaga } from "./ducks/tweet/sagas";
import { userSaga } from "./ducks/user/sagas";

export function* rootSaga() {
    yield all([
        tweetsSaga(),
        tagsSaga(),
        tweetSaga(),
        userSaga()
    ])
}