import {
    SignInAction,
    SignInSuccessAction,
    SignUpAction,
    SignUpSuccessAction,
    UserSignIn,
    UserSignup,
    UserTypes
} from "./user.types";
import {UserType} from "../../context";

export const signUp = (
    user: UserSignup
): SignUpAction => ({
    type: UserTypes.Signup,
    payload: {
        user
    }
})

export const signUpSuccess = (): SignUpSuccessAction => ({
    type: UserTypes.SignupSuccess
})

export const singIn = (
    user: UserSignIn
): SignInAction => ({
    type: UserTypes.Signin,
    payload: {
        user
    }
})

export const signInSuccess = (
    user: UserType
): SignInSuccessAction => ({
    type: UserTypes.SigninSuccess,
    payload: {
        user
    }
})

export const Logout = () => ({ type: UserTypes.Logout })

export const LogoutSuccess = () => ({ type: UserTypes.LogoutSuccess })