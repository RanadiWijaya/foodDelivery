export const saveUser = (value) => {
    return { 
        type: 'SAVE_USER',
        payload: value
    }
} 

export const deleteUser = () => {
    return {
        type: 'DELETE_USER'
    }
}