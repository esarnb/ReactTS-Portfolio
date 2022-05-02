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
        case DiscordActionEnum.setData:
            return payload

        case DiscordActionEnum.clearData:
            return DiscordAuthInitial;

        default: return state;
    }
}

const DiscordProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(DiscordReducer, DiscordAuthInitial);

    return (
        <DiscordContext.Provider value={{ state, dispatch }}>
            {children}
        </DiscordContext.Provider>
    )
}

export { DiscordContext, DiscordProvider };