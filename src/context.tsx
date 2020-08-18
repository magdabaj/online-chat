import React, { createContext } from "react";
import {State} from "./types";

const Context = createContext<{state: State, dispatch: React.Dispatch<any>}>({
    state: {
        currentUser: undefined,
        isAuth: false,
        error: undefined
    },
    dispatch: () => null
})

export default Context