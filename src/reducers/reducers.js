import * as types from '../actions/actionTypes';
//import { temperatures, afDays, rainMm, sunHours } from '../testData';

export const initialState = {
    city: '',
    rawData: [],
    data: {},
    weatherDataLoading: false,
    weatherDataError: false,
    years: [],
    currentYear: 0
};

function makeRawData(textData) {
    let arr = textData.split('\n');
    arr.splice(0, 7);
    arr.pop();

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace( / +/g, ' ' );
        arr[i] = arr[i].replace('*', '');
        arr[i] = arr[i].replace('---', '');
        arr[i] = arr[i].split(' ');
        arr[i].splice(0, 1);

        if (arr[i].length === 8) {
            arr[i].splice(7, 1);
        }
    }

    console.log(arr);

    return arr;
}

function makeYearsArr(arr) {
  let years = [];

  years.push(arr[0][0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] !== years[years.length - 1]) {
      years.push(arr[i][0]);
    }
  }

  return years;
}

function dataParse(rawData) {

    const months = {
        1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun',
        7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec'
    };

    class temperatureData {
        constructor(month) {
            this.month = months[month[1]];
            this.value = [month[3], month[2]];
        }
    }

    class afDaysData {
        constructor(month) {
            this.month = months[month[1]];
            this.value = month[4];
        }
    }

    class rainMmData {
        constructor(month) {
            this.month = months[month[1]];
            this.value = month[5];
        }
    }

    class sunHoursData {
        constructor(month) {
            this.month = months[month[1]];
            this.value = month[6];
        }
    }

    let data = {
        temperatures : {},
        afDays: {},
        rainMm: {},
        sunHours: {}
    };

    let parsedYear = rawData[0][0];

    data.temperatures[parsedYear] = [];
    data.afDays[parsedYear] = [];
    data.rainMm[parsedYear] = [];
    data.sunHours[parsedYear] = [];

    let temperature = new temperatureData(rawData[0]);
    let afDays = new afDaysData(rawData[0]);
    let rainMm = new rainMmData(rawData[0]);
    let sunHours = new sunHoursData(rawData[0]);

    data.temperatures[parsedYear].push(temperature);
    data.afDays[parsedYear].push(afDays);
    data.rainMm[parsedYear].push(rainMm);
    data.sunHours[parsedYear].push(sunHours);

    for (let i = 1; i < rawData.length; i++) {
        temperature = new temperatureData(rawData[i]);
        afDays = new afDaysData(rawData[i]);
        rainMm = new rainMmData(rawData[i]);
        sunHours = new sunHoursData(rawData[i]);

        if (rawData[i][0] === parsedYear) {
            data.temperatures[parsedYear].push(temperature);
            data.afDays[parsedYear].push(afDays);
            data.rainMm[parsedYear].push(rainMm);
            data.sunHours[parsedYear].push(sunHours);
        } else {
            parsedYear = rawData[i][0];

            data.temperatures[parsedYear] = [];
            data.afDays[parsedYear] = [];
            data.rainMm[parsedYear] = [];
            data.sunHours[parsedYear] = [];

            data.temperatures[parsedYear].push(temperature);
            data.afDays[parsedYear].push(afDays);
            data.rainMm[parsedYear].push(rainMm);
            data.sunHours[parsedYear].push(sunHours);
        }
    }

    return data;
}

export default function reducers(state = initialState, action = {}) {
    switch (action.type) {
        case types.GET_WEATHER_DATA:
            console.log('loading');
            return {...state, weatherDataLoading: true};

        case types.GET_WEATHER_DATA_SUCCESS:
            console.log('success');

            let rawData = makeRawData(action.payload);

            let data = dataParse(rawData);

            let yearsArr = makeYearsArr(rawData);

            let currentYear = yearsArr.slice(-1)[0];

            let city = action.payload.split('\n')[0];

            return {...state, weatherDataLoading: false, data: data, years: yearsArr, currentYear: currentYear, city: city};

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
