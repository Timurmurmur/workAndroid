import { CHANGE_SCREEN } from './actions';
import { combineReducers } from 'redux';
import { useNavigation } from '@react-navigation/native';

const initialState = {
    screen: 'InitialState'
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

