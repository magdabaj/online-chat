import {UserType} from "../../context";
import produce from "immer";
import {UserActions, UserTypes} from "./user.types";
import {Reducer} from "react";


export type UserInitialStateType = {
    user: UserType,
    error?: string,
    isLoading: boolean
}

export const userInitialState = {
    user: {
        accessToken: '',
        username: ''
    },
    error: '',
    isLoading: false
}

export const userReducer: Reducer<UserInitialStateType, UserActions> = (
    state = userInitialState,
    action
) => {
    return produce(state, draft => {
        switch (action.type) {
            case UserTypes.Signin:
                draft.isLoading = true
                break
            case UserTypes.SigninSuccess:
                draft.user.accessToken = action.payload.user.accessToken
                draft.isLoading = false
                break
            case UserTypes.Signup:
                draft.isLoading = true
                break
            case UserTypes.SignupSuccess:
                draft.isLoading = false
                break
            case UserTypes.LogoutSuccess:
                draft.isLoading = false
                break
            case UserTypes.Logout:
                draft.isLoading = true
                break
            default:
                return state
        }
    })
}