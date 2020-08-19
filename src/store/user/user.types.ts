import {UserType} from "../../context";

export type UserSignup = {
    username: string,
    email: string,
    password: string,
}

export type UserSignIn = {
    username: string,
    password: string
}

export enum UserTypes {
    Signin = 'SIGNIN_USER',
    SigninSuccess = 'SIGNIN_USER_SUCCESS',
    Signup = 'SIGNUP_USER',
    SignupSuccess = 'SIGNUP_USER_SUCCESS',
    Logout = 'LOGOUT_USER',
    LogoutSuccess = 'LOGOUT_USER_SUCCESS'
}

export type SignUpAction = {
    type: typeof UserTypes.Signup,
    payload: {
        user: UserSignup
    }
}

export type SignUpSuccessAction = {
    type: typeof UserTypes.SignupSuccess,
}

export type SignInAction = {
    type: typeof UserTypes.Signin,
    payload: {
        user: UserSignIn
    }
}

export type SignInSuccessAction = {
    type: typeof UserTypes.SigninSuccess,
    payload: {
        user: UserType
    }
}

export type LogoutAction = {
    type: typeof UserTypes.Logout,
}

export type LogoutSuccessAction = {
    type: typeof UserTypes.LogoutSuccess
}

export type UserActions =
    | SignInSuccessAction
    | SignUpSuccessAction
    | SignInAction
    | SignUpAction
    | LogoutAction
    | LogoutSuccessAction