const initialState = {
    id: '',
    username: '',
    password: '',
    email: '',
    isLogin: false
}

export const userLoginReducer = (state = initialState, action) => {
    if (action.type === 'SAVE_USER'){
        return action.payload
    }
    else if (action.type === 'DELETE_USER'){
        return state
    }
    return state
}