const months = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec'
};

class month {
    constructor(month, value) {
        this.month = month;
        value ? this.value = value : this.value = '';
    }
}

function createYear(data) {
    let year = {};


}

export const testData = {
    2015: {
        1: {
            tMax: 6.3,
            tMin: 1.7,
            afDays: 9,
            rainMm: 110.6,
            sunHours: 51.4
        },

        2: {
            tMax: 6.6,
            tMin: 1.6,
            afDays: 6,
            rainMm: 34.0,
            sunHours: 69.6
        },

        3: {
            tMax: 9.3,
            tMin: 2.5,
            afDays: 4,
            rainMm: 79.6,
            sunHours: 104.7
        },

        4: {
            tMax: 13.5,
            tMin: 4.0,
            afDays: 1,
            rainMm: 30.8,
            sunHours: 197.6
        },

        5: {
            tMax: 13.8,
            tMin: 6.8,
            afDays: 1,
            rainMm: 109.2,
            sunHours: 148.3
        },

        6: {
            tMax: 18.1,
            tMin: 8.9,
            afDays: 0,
            rainMm: 31.4,
            sunHours: 165.5
        },

        7: {
            tMax: 19.4,
            tMin: 11.1,
            afDays: 0,
            rainMm: 85.0,
            sunHours: 157.1
        },

        8: {
            tMax: 19.7,
            tMin: 11.7,
            afDays: 0,
            rainMm: 97.0,
            sunHours: 146.6
        },

        9: {
            tMax: 16.1,
            tMin: 8.2,
            afDays: 0,
            rainMm: 57.2,
            sunHours: 150.0
        },

        10: {
            tMax: 13.8,
            tMin: 6.9,
            afDays: 0,
            rainMm: 91.4,
            sunHours: 73.0
        },

        11: {
            tMax: 11.6,
            tMin: 5.8,
            afDays: 2,
            rainMm: 184.0,
            sunHours: 33.6
        },

        12: {
            tMax: 11.5,
            tMin: 5.6,
            afDays: 2,
            rainMm: 198.2,
            sunHours: 23.4
        }
    },

    2016: {
        1: {
            tMax: 7.5,
            tMin: 2.3,
            afDays: 10,
            rainMm: 137.8,
            sunHours: 27.8
        },

        2: {
            tMax: 7.4,
            tMin: 1.3,
            afDays: 9,
            rainMm: 72.8,
            sunHours: 82.3
        },

        3: {
            tMax: 8.8,
            tMin: 2.4,
            afDays: 5,
            rainMm: 90.2,
            sunHours: 105.8
        },

        4: {
            tMax: 10.9,
            tMin: 2.9,
            afDays: 3,
            rainMm: 67.6,
            sunHours: 147.6
        },

        5: {
            tMax: 16.3,
            tMin: 7.4,
            afDays: 0,
            rainMm: 44.8,
            sunHours: 187.0
        },

        6: {
            tMax: 18.3,
            tMin: 10.7,
            afDays: 0,
            rainMm: 105.6,
            sunHours: 123.9
        },

        7: {
            tMax: 19.9,
            tMin: 12.7,
            afDays: 0,
            rainMm: 34.2,
            sunHours: 163.1
        },

        8: {
            tMax: 19.7,
            tMin: 12.4,
            afDays: 0,
            rainMm: 60.2,
            sunHours: 179.7
        },

        9: {
            tMax: 19.4,
            tMin: 12.0,
            afDays: 0,
            rainMm: 53.6,
            sunHours: 131.0
        },

        10: {
            tMax: 13.6,
            tMin: 7.4,
            afDays: 0,
            rainMm: 30.4,
            sunHours: 98.7
        },

        11: {
            tMax: 7.8,
            tMin: 2.4,
            afDays: 8,
            rainMm: 95.0,
            sunHours: 68.4
        },

        12: {
            tMax: 9.2,
            tMin: 3.6,
            afDays: 5,
            rainMm: 37.2,
            sunHours: 41.9
        }
    },

    2017: {
        1: {
            tMax: 6.6,
            tMin: 1.8,
            afDays: 11,
            rainMm: 36.0,
            sunHours: 50.9
        },

        2: {
            tMax: 8.0,
            tMin: 3.2,
            afDays: 2,
            rainMm: 57.8,
            sunHours: 46.0
        },

        3: {
            tMax: 11.5,
            tMin: 4.9,
            afDays: 1,
            rainMm: 80.0,
            sunHours: 126.1
        },

        4: {
            tMax: 12.7,
            tMin: 4.8,
            afDays: 1,
            rainMm: 20.4,
            sunHours: 163.5
        },

        5: {
            tMax: 17.1,
            tMin: 8.3,
            afDays: 0,
            rainMm: 40.6,
            sunHours: 201.1
        },

        6: {
            tMax: 18.9,
            tMin: 11.7,
            afDays: 0,
            rainMm: 105.2,
            sunHours: 160.7
        },

        7: {
            tMax: 19.9,
            tMin: 11.8,
            afDays: 0,
            rainMm: 74.2,
            sunHours: 172.0
        },

        8: {
            tMax: '',
            tMin: '',
            afDays: '',
            rainMm: '',
            sunHours: ''
        },

        9: {
            tMax: '',
            tMin: '',
            afDays: '',
            rainMm: '',
            sunHours: ''
        },

        10: {
            tMax: '',
            tMin: '',
            afDays: '',
            rainMm: '',
            sunHours: ''
        },

        11: {
            tMax: '',
            tMin: '',
            afDays: '',
            rainMm: '',
            sunHours: ''
        },

        12: {
            tMax: '',
            tMin: '',
            afDays: '',
            rainMm: '',
            sunHours: ''
        }
    },
};

export const temperatures = {
    2015: [
        {month: 'Jan', value: [1, 10]},
        {month: 'Feb', value: [2, 13]},
        {month: 'Mar', value: [4, 15]},
        {month: 'Apr', value: [8, 21]},
        {month: 'May', value: [10, 24]},
        {month: 'Jun', value: [15, 31]},
        {month: 'Jul', value: [17, 33]},
        {month: 'Aug', value: [16, 36]},
        {month: 'Sep', value: [14, 30]},
        {month: 'Oct', value: [12, 27]},
        {month: 'Nov', value: [8, 21]},
        {month: 'Dec', value: [3, 15]},
    ],

    2016: [
        {month: 'Jan', value: [-2, 8]},
        {month: 'Feb', value: [2, 13]},
        {month: 'Mar', value: [6, 14]},
        {month: 'Apr', value: [8, 21]},
        {month: 'May', value: [12, 22]},
        {month: 'Jun', value: [17, 35]},
        {month: 'Jul', value: [13, 30]},
        {month: 'Aug', value: [14, 28]},
        {month: 'Sep', value: [11, 25]},
        {month: 'Oct', value: [8, 18]},
        {month: 'Nov', value: [-1, 13]},
        {month: 'Dec', value: [-3, 9]},
    ],

    2017: [
        {month: 'Jan', value: [-2, 8]},
        {month: 'Feb', value: [2, 13]},
        {month: 'Mar', value: [6, 14]},
        {month: 'Apr', value: [8, 21]},
        {month: 'May', value: [12, 22]},
        {month: 'Jun', value: [17, 35]},
        {month: 'Jul', value: [13, 30]},
        {month: 'Aug', value: [14, 28]},
        {month: 'Sep', value: []},
        {month: 'Oct', value: []},
        {month: 'Nov', value: []},
        {month: 'Dec', value: []},
    ]
};

export const afDays = {
    2015: [
        {month: 'Jan', value: 21},
        {month: 'Feb', value: 15},
        {month: 'Mar', value: 4},
        {month: 'Apr', value: 1},
        {month: 'May', value: 0},
        {month: 'Jun', value: 0},
        {month: 'Jul', value: 0},
        {month: 'Aug', value: 0},
        {month: 'Sep', value: 0},
        {month: 'Oct', value: 2},
        {month: 'Nov', value: 13},
        {month: 'Dec', value: 16},
    ],

    2016: [
        {month: 'Jan', value: 20},
        {month: 'Feb', value: 16},
        {month: 'Mar', value: 6},
        {month: 'Apr', value: 2},
        {month: 'May', value: 1},
        {month: 'Jun', value: 0},
        {month: 'Jul', value: 0},
        {month: 'Aug', value: 0},
        {month: 'Sep', value: 0},
        {month: 'Oct', value: 1},
        {month: 'Nov', value: 12},
        {month: 'Dec', value: 18},
    ],

    2017: [
        {month: 'Jan', value: 19},
        {month: 'Feb', value: 12},
        {month: 'Mar', value: 3},
        {month: 'Apr', value: 0},
        {month: 'May', value: 0},
        {month: 'Jun', value: 0},
        {month: 'Jul', value: 0},
        {month: 'Aug', value: 0},
        {month: 'Sep', value: ''},
        {month: 'Oct', value: ''},
        {month: 'Nov', value: ''},
        {month: 'Dec', value: ''},
    ]
};

export const rainMm = {
    2015: [
        {month: 'Jan', value: 21},
        {month: 'Feb', value: 25},
        {month: 'Mar', value: 19},
        {month: 'Apr', value: 40},
        {month: 'May', value: 35},
        {month: 'Jun', value: 24},
        {month: 'Jul', value: 21},
        {month: 'Aug', value: 26},
        {month: 'Sep', value: 98},
        {month: 'Oct', value: 150},
        {month: 'Nov', value: 120},
        {month: 'Dec', value: 75},
    ],

    2016: [
        {month: 'Jan', value: 21},
        {month: 'Feb', value: 25},
        {month: 'Mar', value: 19},
        {month: 'Apr', value: 40},
        {month: 'May', value: 35},
        {month: 'Jun', value: 24},
        {month: 'Jul', value: 21},
        {month: 'Aug', value: 26},
        {month: 'Sep', value: 98},
        {month: 'Oct', value: 150},
        {month: 'Nov', value: 120},
        {month: 'Dec', value: 75},
    ],

    2017: [
        {month: 'Jan', value: 21},
        {month: 'Feb', value: 25},
        {month: 'Mar', value: 19},
        {month: 'Apr', value: 40},
        {month: 'May', value: 35},
        {month: 'Jun', value: 24},
        {month: 'Jul', value: 21},
        {month: 'Aug', value: 26},
        {month: 'Sep', value: ''},
        {month: 'Oct', value: ''},
        {month: 'Nov', value: ''},
        {month: 'Dec', value: ''},
    ]
};

export const sunHours = {
    2015: [
        {month: 'Jan', value: 3},
        {month: 'Feb', value: 6},
        {month: 'Mar', value: 12},
        {month: 'Apr', value: 18},
        {month: 'May', value: 31},
        {month: 'Jun', value: 50},
        {month: 'Jul', value: 54},
        {month: 'Aug', value: 48},
        {month: 'Sep', value: 31},
        {month: 'Oct', value: 23},
        {month: 'Nov', value: 11},
        {month: 'Dec', value: 5}
    ],

    2016: [
        {month: 'Jan', value: 5},
        {month: 'Feb', value: 7},
        {month: 'Mar', value: 18},
        {month: 'Apr', value: 21},
        {month: 'May', value: 36},
        {month: 'Jun', value: 58},
        {month: 'Jul', value: 63},
        {month: 'Aug', value: 51},
        {month: 'Sep', value: 36},
        {month: 'Oct', value: 28},
        {month: 'Nov', value: 12},
        {month: 'Dec', value: 8}
    ],

    2017: [
        {month: 'Jan', value: 4},
        {month: 'Feb', value: 8},
        {month: 'Mar', value: 11},
        {month: 'Apr', value: 15},
        {month: 'May', value: 29},
        {month: 'Jun', value: 48},
        {month: 'Jul', value: 82},
        {month: 'Aug', value: 59},
        {month: 'Sep', value: ''},
        {month: 'Oct', value: ''},
        {month: 'Nov', value: ''},
        {month: 'Dec', value: ''}
    ]
};