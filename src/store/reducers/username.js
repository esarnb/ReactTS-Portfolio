
const userReducer = (state = "No name", action) => {
    switch(action.type) {
        case "SETNAME":
            state = action.payload;
            return state
        default: 
            return state;
    }
}

export default userReducer;