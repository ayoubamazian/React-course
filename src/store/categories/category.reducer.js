import { USER_ACTION_TYPES } from "./category.types";

export const INITIAL_STATE = {
    Categories: []
}

export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CATEGORIES:
            return{
                ...state,
                Categories:payload
            }
    
        default:
            return state;
    }
}