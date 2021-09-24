import { types } from "../types/types"

export const actionSincronica = (email, password, name) => {
    return {
        type: types.login,
        payload:{
            email,
            password, 
            name


        }
    }
}