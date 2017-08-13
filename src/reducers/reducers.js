import * as types from '../actions/actionTypes';
import { testData } from '../testData';

import _ from 'lodash';

export const initialState = {
    city: '',
    data: [],
    weatherDataLoading: false,
    weatherDataError: false,
    years: Object.keys(testData),
    currentYear: Object.keys(testData)[Object.keys(testData).length - 1]
};

class monthData {
    constructor(tMax, tMin, af, rain, sun) {
        this.tMax = tMax;
        this.tMin = tMin;
        this.af = af;
        this.rain = rain;
        this.sun = sun;
    }
}

function dataParse(rawData) {
    let rawArr = rawData.split('\n');
    rawArr.splice(0, 7);

    let objData = {};

    for (let i = 0; i < rawArr.length; i++) {
        rawArr[i] = rawArr[i].replace( / +/g, ' ' );
        rawArr[i] = rawArr[i].replace('*', '');
        rawArr[i] = rawArr[i].replace('---', '');
        rawArr[i] = rawArr[i].split(' ');
        rawArr[i].splice(0, 1);

        if (rawArr[i].length === 8) {
            rawArr[i].splice(7, 1);
        }
    }

    return rawArr;
}

export default function reducers(state = initialState, action = {}) {
    switch (action.type) {
        case types.GET_WEATHER_DATA:
            console.log('loading');
            return {...state, weatherDataLoading: true};

        case types.GET_WEATHER_DATA_SUCCESS:
            console.log('success');
            return {...state, weatherDataLoading: false, city: action.payload.split('\n')[0], data: dataParse(action.payload)};

        case types.GET_WEATHER_DATA_ERROR:
            console.log('error');
            return {...state, weatherDataLoading: false, weatherDataError: true};

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
