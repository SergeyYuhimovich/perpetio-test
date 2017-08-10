import * as types from '../actions/actionTypes';
import { testData } from '../testData';

//import _ from 'lodash';

export const initialState = {
    years: Object.keys(testData),
    currentYear: Object.keys(testData)[Object.keys(testData).length - 1]
};

export default function reducers(state = initialState, action = {}) {
    switch (action.type) {
        case types.ON_PREVIOUS_BUTTON_CLICK:
            return {...state, currentYear: state.currentYear - 1};

        case types.ON_NEXT_BUTTON_CLICK:
            return {...state, currentYear: state.currentYear + 1};

        case types.ON_YEAR_SELECT:
            return {...state, currentYear: action.year};

        default:
            return state;
    }
}
