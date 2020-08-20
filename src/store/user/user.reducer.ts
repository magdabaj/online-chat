import produce from "immer";
import {UserActions, UserTypes, UserType} from "./user.types";

export type UserInitialStateType = {
    userData: UserType,
    error?: string,
    isLoading: boolean,
    isAuthenticated: boolean
}

export const userInitialState = {
    userData: {
        accessToken: '',
        username: ''
    },
    error: '',
    isLoading: false,
    isAuthenticated: false
}

export const userReducer = (
    state:  UserInitialStateType = userInitialState,
    action:UserActions
) => {
    return produce(state, draft => {
        switch (action.type) {
            case UserTypes.SigninSuccess:
                draft.userData.accessToken = action.payload.user.accessToken
                draft.isLoading = false
                draft.isAuthenticated = true
                break
            case UserTypes.Signup:
                draft.isLoading = true
                break
            case UserTypes.SignupSuccess:
                draft.isLoading = false
                break
            case UserTypes.LogoutSuccess:
                draft.isLoading = false
                draft.isAuthenticated = false
                draft.userData = userInitialState.userData
                break
            case UserTypes.Signin:
            case UserTypes.Logout:
                draft.isLoading = true
                break
            default:
                return state
        }
    })
}