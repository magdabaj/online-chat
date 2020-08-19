import React, { createContext } from "react";
import {userInitialState, UserInitialStateType, userReducer} from "./store/user/user.reducer";

export type UserType = {
    accessToken?: string,
    username?: string
}

type InitialStateType = {
    user: UserInitialStateType
}

const initialState = {
    user: userInitialState,
}

const Context = createContext<{
    state: InitialStateType;
    dispatch: React.Dispatch<any>
}>({
    state: initialState,
    dispatch: () => null
})

const mainReducer = ({user}: any, action: any) => ({
    user: userReducer(user, action)
})

const AppProvider: React.FC = ({children}) => {
    const [state, dispatch] = mainReducer(mainReducer, initialState)

    return(
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export { Context, AppProvider }