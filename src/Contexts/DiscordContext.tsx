import React, { useReducer } from "react";
import { DiscordAuthStateType, DiscordAuthInitial, DiscordActionEnum, DiscordActionI } from "../Interfaces/Discord";

const DiscordContext = React.createContext<{
    state: DiscordAuthStateType;
    dispatch: React.Dispatch<any>;
}>({
    state: DiscordAuthInitial,
    dispatch: () => null
});


function DiscordReducer(state: DiscordAuthStateType, action: DiscordActionI) {
    const { type, payload } = action;
    switch (type) {
        case DiscordActionEnum.setCode:
            return {...state, code: payload}

        case DiscordActionEnum.clearCode:
            return {...state, code: null}

        default: return state;
    }
}


const DiscordProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(DiscordReducer, { code: null });

    return (
        <DiscordContext.Provider value={{ state, dispatch }}>
            {children}
        </DiscordContext.Provider>
    )
}

export { DiscordContext, DiscordProvider };