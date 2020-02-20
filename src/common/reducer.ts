import { CHANGE_SCREEN } from './actions';
import { combineReducers } from 'redux';
const initialState = {
    screen: "Главная"
}


export const screenReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_SCREEN: {
            return {
                ...state
            }
        }
        default:
            return state;
    }
}

