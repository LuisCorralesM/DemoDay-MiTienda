import {
    types
} from "../types/types";


export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:

            return {
                ...state,
                id: action.payload.id,
                    name: action.payload.displayname,
                    email:action.payload.email,
                    photo:action.payload.photo
            };

        case types.logout:
            return []


        default:
            return state;
    }
}