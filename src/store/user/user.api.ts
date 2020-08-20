import {UserSignIn, UserSignup} from "./user.types";
import axios from 'axios'

const url: string = 'http://localhost:3000'

export const signInUserApi = (user: UserSignIn) =>
    axios.post(`${url}/auth/signin`, user)

export const signUpUserApi = (user: UserSignup) =>
    axios.post(`${url}/auth/signup`)

