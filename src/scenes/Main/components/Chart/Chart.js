import React from 'react';
import { ResponsiveContainer, AreaChart, Area, LineChart, Line, CartesianGrid, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import './Chart.css';

const Chart = ( {type, title} ) => {

    const temperatures = [
        {month: 'Jan', 'Temperature': [1, 10]},
        {month: 'Feb', 'Temperature': [2, 13]},
        {month: 'Mar', 'Temperature': [4, 15]},
        {month: 'Apr', 'Temperature': [8, 21]},
        {month: 'May', 'Temperature': [10, 24]},
        {month: 'Jun', 'Temperature': [15, 31]},
        {month: 'Jul', 'Temperature': [17, 33]},
        {month: 'Aug', 'Temperature': [16, 36]},
        {month: 'Sep', 'Temperature': [14, 30]},
        {month: 'Oct', 'Temperature': [12, 27]},
        {month: 'Nov', 'Temperature': [8, 21]},
        {month: 'Dec', 'Temperature': [3, 15]},
    ];

    const af = [
        {month: 'Jan', 'Air frost days': 1},
        {month: 'Feb', 'Air frost days': 2},
        {month: 'Mar', 'Air frost days': 4},
        {month: 'Apr', 'Air frost days': 8},
        {month: 'May', 'Air frost days': 10},
        {month: 'Jun', 'Air frost days': 15},
        {month: 'Jul', 'Air frost days': 17},
        {month: 'Aug', 'Air frost days': 16},
        {month: 'Sep', 'Air frost days': 14},
        {month: 'Oct', 'Air frost days': 12},
        {month: 'Nov', 'Air frost days': 8},
        {month: 'Dec', 'Air frost days': 3},
    ];

    const rain = [
        {month: 'Jan', 'Rain mm': 1},
        {month: 'Feb', 'Rain mm': 2},
        {month: 'Mar', 'Rain mm': 4},
        {month: 'Apr', 'Rain mm': 8},
        {month: 'May', 'Rain mm': 10},
        {month: 'Jun', 'Rain mm': 15},
        {month: 'Jul', 'Rain mm': 17},
        {month: 'Aug', 'Rain mm': 16},
        {month: 'Sep', 'Rain mm': 14},
        {month: 'Oct', 'Rain mm': 12},
        {month: 'Nov', 'Rain mm': 8},
        {month: 'Dec', 'Rain mm': 3},
    ];

    const sunHours = [
        {month: 'Jan', 'Sun hours': 1},
        {month: 'Feb', 'Sun hours': 2},
        {month: 'Mar', 'Sun hours': 4},
        {month: 'Apr', 'Sun hours': 8},
        {month: 'May', 'Sun hours': 10},
        {month: 'Jun', 'Sun hours': 15},
        {month: 'Jul', 'Sun hours': 17},
        {month: 'Aug', 'Sun hours': 16},
        {month: 'Sep', 'Sun hours': 14},
        {month: 'Oct', 'Sun hours': 12},
        {month: 'Nov', 'Sun hours': 8},
        {month: 'Dec', 'Sun hours': 3},
    ];

    return (
        <div className="chart">
            <h2 className="chart__title">{title}</h2>

            <div className="chart__content">
                {type === 'temperatures' && <ResponsiveContainer debounce="1">
                    <AreaChart data={temperatures}>
                        <XAxis dataKey="month"/>
                        <YAxis/>
                        <Tooltip/>
                        <Area type='monotone' dataKey='Temperature' stroke='#D32F2F' fillOpacity={0.5} fill="#f44336" />
                    </AreaChart>
                </ResponsiveContainer>}

                {type === 'af' && <ResponsiveContainer debounce="1">
                    <LineChart data={af}>
                        <CartesianGrid strokeDasharray="1 3" />
                        <XAxis dataKey="month"/>
                        <YAxis/>
                        <Tooltip/>
                        <Line dataKey='Air frost days' stroke='#2196F3' strokeWidth='3' />
                    </LineChart>
                </ResponsiveContainer>}

                {type === 'rain' && <ResponsiveContainer debounce="1">
                    <BarChart data={rain}>
                        <XAxis dataKey="month"/>
                        <YAxis/>
                        <Tooltip label="hellow"/>
                        <Bar dataKey='Rain mm' stroke='#64B5F6' fillOpacity={1} fill="#64B5F6" />
                    </BarChart>
                </ResponsiveContainer>}

                {type === 'sunHours' && <ResponsiveContainer debounce="1">
                    <AreaChart data={sunHours}>
                        <XAxis dataKey="month"/>
                        <YAxis/>
                        <Tooltip/>
                        <Area type='monotone' dataKey='Sun hours' stroke='#FBC02D' fillOpacity={0.5} fill="#FFEB3B" />
                    </AreaChart>
                </ResponsiveContainer>}
            </div>
        </div>
    )
};

export default Chart;