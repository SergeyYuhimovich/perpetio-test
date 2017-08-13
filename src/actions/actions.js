import * as types from './actionTypes';
import Service from '../services/services';

export const getWeatherData = () => dispatch => {
    dispatch({type: types.GET_WEATHER_DATA});

    Service.getWeatherData()
        .then(response => {
            if (response.status === 200) {
                dispatch({type: types.GET_WEATHER_DATA_SUCCESS, payload: response.data});
            } else {
                dispatch({type: types.GET_WEATHER_DATA_ERROR, payload: response});
            }
        })
        .catch(response => {
            dispatch({type: types.GET_WEATHER_DATA_ERROR, payload: response});
        });
};

export function onPreviousButtonClick() {
    return {
        type: types.ON_PREVIOUS_BUTTON_CLICK
    };
}

export function onNextButtonClick() {
    return {
        type: types.ON_NEXT_BUTTON_CLICK
    };
}

export function onYearSelect(year) {
    return {
        type: types.ON_YEAR_SELECT,
        year
    };
}