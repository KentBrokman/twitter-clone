import { ProfileApi } from './../../../services/profileApi';
import { SagaReturnType, call, takeLatest, put } from '@redux-saga/core/effects';
import { AuthApi } from '../../../services/authApi';
import { LoadingState, LogInState, ProfileUpdatingState } from '../../types';
import { fetchUserData, setProfileUpdatingStatus, setUserData, setUserLoadingStatus, setUserLogInStatus } from './actionCreators';
import { FetchSignInActionType, FetchSignUpActionType, FetchUpdateProfileActionType, UserActionsType } from './contracts/actionTypes';
import { UserType } from './contracts/stateTypes';


// type FetchSignInReturnType = SagaReturnType<typeof AuthApi.signIn>

export function* fetchSignInRequest({payload}: FetchSignInActionType) {
    try {
        yield put(setUserLogInStatus(LogInState.LOADING))
        yield put(setUserLoadingStatus(LoadingState.LOADING))
        const {data} = yield call(AuthApi.signIn, payload)
        window.localStorage.setItem('token', data.token)
        yield put(setUserData(data))
        yield put(setUserLoadingStatus(LoadingState.LOADED))
        yield put(setUserLogInStatus(LogInState.LOADED))
    } catch (error) {
        yield put(setUserLoadingStatus(LoadingState.ERROR))
        yield put(setUserLogInStatus(LogInState.ERROR))
    }
}

export function* fetchSignUpRequest({payload}: FetchSignUpActionType) {
    try {
        yield put(setUserLogInStatus(LogInState.LOADING))
        yield put(setUserLoadingStatus(LoadingState.LOADING))
        yield call(AuthApi.signUp, payload)
        yield put(setUserLoadingStatus(LoadingState.LOADED))
        yield put(setUserLogInStatus(LogInState.LOADED))
    } catch (error) {
        yield put(setUserLoadingStatus(LoadingState.ERROR))
        yield put(setUserLogInStatus(LogInState.ERROR))
    }
}

export function* fetchUserDataRequest() {
    try {
        yield put(setUserLoadingStatus(LoadingState.LOADING))
        const {data} = yield call(AuthApi.getMe)
        yield put(setUserData(data))
        yield put(setUserLoadingStatus(LoadingState.LOADED))
    } catch (error) {
        yield put(setUserLoadingStatus(LoadingState.ERROR))
    }
}

export function* fetchUpdateProfileRequest({payload}: FetchUpdateProfileActionType) {
    try {
        yield put(setProfileUpdatingStatus(ProfileUpdatingState.LOADING))
        if (payload.backgroundPhoto) {
            yield call(ProfileApi.uploadBackgroundPhoto, payload.backgroundPhoto)
        }
        if (payload.profilePhoto) {
            yield call(ProfileApi.uploadProfilePhoto, payload.profilePhoto)
        }
        yield call(ProfileApi.updateProfile, payload.profileData)
        const {data} = yield call(AuthApi.getMe)
        yield put(setUserData(data))
        yield put(setProfileUpdatingStatus(ProfileUpdatingState.LOADED))
    } catch (error) {
        yield put(setProfileUpdatingStatus(ProfileUpdatingState.ERROR))
    }
}

export function* userSaga() {
    yield takeLatest(UserActionsType.FETCH_USER_DATA, fetchUserDataRequest)
    yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest)
    yield takeLatest(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest)
    yield takeLatest(UserActionsType.FETCH_UPDATE_PROFILE, fetchUpdateProfileRequest)
}