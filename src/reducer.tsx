import {State} from "./types";

export default function reducer(state: State, action: { type: any; payload: any; }): State {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}