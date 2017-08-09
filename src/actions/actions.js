import * as types from './actionTypes';

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