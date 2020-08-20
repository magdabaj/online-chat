import React, {createContext, Dispatch, useReducer} from "react";
import {userInitialState, UserInitialStateType, userReducer} from "./store/user/user.reducer";
import {UserActions} from "./store/user/user.types";


type InitialStateType = {
    user: UserInitialStateType
}

const initialState = {
    user: userInitialState,
}

const Context = createContext<{
    state: InitialStateType;
    dispatch: Dispatch<UserActions>
}>({
    state: initialState,
    dispatch: () => null
})

const mainReducer = ({user}: InitialStateType, action: UserActions) => ({
    user: userReducer(user, action)
})

const AppProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(mainReducer, initialState)

    console.log(state)
    return(
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export { Context, AppProvider }