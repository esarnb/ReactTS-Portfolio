export const increment = (num) => {
    return {
        type: "INCREMENT",
        payload: num 
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

export const isLogged = ()  => {
    return {
        type: "SIGN_IN"
    }
}

export const gitUpdate = () => {
    return {
        type: "UPDATE"
    }
}

export const setUserName = (newName) => {
    return {
        type: "SETNAME",
        payload: newName
    }
}