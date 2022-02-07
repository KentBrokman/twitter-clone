import { RegisterFormProps } from './../../../pages/SignIn/components/RegisterModal';
import { LoadingState, LogInState, ProfileUpdatingState } from './../../types';
import { UpdateProfileType, UserType } from './contracts/stateTypes';
import { UserActionsType, SetUserActionType, FetchSignInActionType, SetUserLoadingStatusActionType, FetchSignUpActionType, FetchUserDataActionType, SignOutActionType, SetLogInStatusActionType, SetProfileUpdatingStatusActionType, FetchUpdateProfileActionType } from './contracts/actionTypes';
import { LoginFormProps } from '../../../pages/SignIn/components/LoginModal';




export const setUserData = (payload: UserType): SetUserActionType => ({
    type: UserActionsType.SET_USER_DATA,
    payload
})

export const fetchSignIn = (payload: LoginFormProps): FetchSignInActionType => ({
    type: UserActionsType.FETCH_SIGN_IN,
    payload
})

export const fetchSignUp = (payload: RegisterFormProps): FetchSignUpActionType => ({
    type: UserActionsType.FETCH_SIGN_UP,
    payload
})

export const signOut = (): SignOutActionType => ({
    type: UserActionsType.SIGN_OUT
})

export const fetchUserData = (): FetchUserDataActionType => ({
    type: UserActionsType.FETCH_USER_DATA
})

export const fetchUpdateProfile = (payload: UpdateProfileType): FetchUpdateProfileActionType => ({
    type: UserActionsType.FETCH_UPDATE_PROFILE,
    payload
})

export const setUserLoadingStatus = (payload: LoadingState): SetUserLoadingStatusActionType => ({
    type: UserActionsType.SET_LOADING_STATE,
    payload
})

export const setUserLogInStatus = (payload: LogInState): SetLogInStatusActionType => ({
    type: UserActionsType.SET_LOG_IN_STATE,
    payload
})

export const setProfileUpdatingStatus = (payload: ProfileUpdatingState): SetProfileUpdatingStatusActionType => ({
    type: UserActionsType.SET_PROFILE_UPDATING_STATE,
    payload
})