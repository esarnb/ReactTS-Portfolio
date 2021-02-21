const initialState = {
    name: "user"
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case "setName":
            return action.payload;
        default: 
            return state;
    }
}

export default userReducer;