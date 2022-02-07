import { LoadingState, LogInState, ProfileUpdatingState } from './../../types';
import { UserStateType } from './contracts/stateTypes';
import { AppStateType } from './../../rootReducer';


export const selectUserState = (state: AppStateType): UserStateType => state.user


export const selectIsAuth = (state: AppStateType): boolean => !!selectUserState(state).data


export const selectUserStatus = (state: AppStateType): LoadingState => selectUserState(state).status 
export const selectLogInStatus = (state: AppStateType): LogInState => selectUserState(state).loginStatus
export const selectProfileUpdatingStatus = (state: AppStateType): ProfileUpdatingState => selectUserState(state).prfoileUpdateingStatus
