import { Action } from 'redux';
import { LoginFormProps } from '../../../../pages/SignIn/components/LoginModal';
import { RegisterFormProps } from '../../../../pages/SignIn/components/RegisterModal';
import { LoadingState, LogInState, ProfileUpdatingState } from '../../../types';
import { UpdateProfileType, UserType } from './stateTypes';




export enum UserActionsType {
    SET_USER_DATA = 'user/SET_USER_DATA',
    FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
    FETCH_SIGN_UP = 'user/FETCH_SIGN_UP',
    FETCH_USER_DATA = 'user/FETCH_USER_DATA',
    FETCH_UPDATE_PROFILE = 'user/FETCH_UPDATE_PROFILE',
    SET_LOADING_STATE = 'user/SET_LOADING_STATE',
    SET_LOG_IN_STATE = 'user/SET_LOG_IN_STATE',
    SET_PROFILE_UPDATING_STATE = 'user/SET_PROFILE_UPDATING_STATE',
    SIGN_OUT = 'user/SIGN_OUT',
}

export interface SetUserActionType extends Action<UserActionsType> {
    type: UserActionsType.SET_USER_DATA,
    payload: UserType
}

export interface FetchSignInActionType extends Action<UserActionsType> {
    type: UserActionsType.FETCH_SIGN_IN,
    payload: LoginFormProps
}

export interface FetchSignUpActionType extends Action<UserActionsType> {
    type: UserActionsType.FETCH_SIGN_UP,
    payload: RegisterFormProps
}

export interface SignOutActionType extends Action<UserActionsType> {
    type: UserActionsType.SIGN_OUT
}

export interface SetLogInStatusActionType extends Action<UserActionsType> {
    type: UserActionsType.SET_LOG_IN_STATE,
    payload: LogInState
}

export interface SetProfileUpdatingStatusActionType extends Action<UserActionsType> {
    type: UserActionsType.SET_PROFILE_UPDATING_STATE,
    payload: ProfileUpdatingState
}

export interface FetchUserDataActionType extends Action<UserActionsType> {
    type: UserActionsType.FETCH_USER_DATA
}

export interface FetchUpdateProfileActionType extends Action<UserActionsType> {
    type: UserActionsType.FETCH_UPDATE_PROFILE,
    payload: UpdateProfileType
}

export interface SetUserLoadingStatusActionType extends Action<UserActionsType> {
    type: UserActionsType.SET_LOADING_STATE,
    payload: LoadingState
}

export type UserActions = SetUserActionType |
    FetchSignInActionType |
    FetchSignUpActionType |
    FetchUserDataActionType |
    SetUserLoadingStatusActionType |
    SignOutActionType |
    SetLogInStatusActionType |
    SetProfileUpdatingStatusActionType |
    FetchUpdateProfileActionType