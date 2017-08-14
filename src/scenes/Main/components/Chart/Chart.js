import React from 'react';
import { ResponsiveContainer, AreaChart, Area, LineChart, Line, CartesianGrid, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import './Chart.css';

const Chart = ( {type, title} ) => {

    const temperatures = [
        {month: 'Jan', t: [1, 10]},
        {month: 'Feb', t: [2, 13]},
        {month: 'Mar', t: [4, 15]},
        {month: 'Apr', t: [8, 21]},
        {month: 'May', t: [10, 24]},
        {month: 'Jun', t: [15, 31]},
        {month: 'Jul', t: [17, 33]},
        {month: 'Aug', t: [16, 36]},
        {month: 'Sep', t: [14, 30]},
        {month: 'Oct', t: [12, 27]},
        {month: 'Nov', t: [8, 21]},
        {month: 'Dec', t: [3, 15]},
    ];

    const af = [
        {month: 'Jan', afd: 1},
        {month: 'Feb', afd: 2},
        {month: 'Mar', afd: 4},
        {month: 'Apr', afd: 8},
        {month: 'May', afd: 10},
        {month: 'Jun', afd: 15},
        {month: 'Jul', afd: 17},
        {month: 'Aug', afd: 16},
        {month: 'Sep', afd: 14},
        {month: 'Oct', afd: 12},
        {month: 'Nov', afd: 8},
        {month: 'Dec', afd: 3},
    ];

    const rain = [
        {month: 'Jan', rmm: 1},
        {month: 'Feb', rmm: 2},
        {month: 'Mar', rmm: 4},
        {month: 'Apr', rmm: 8},
        {month: 'May', rmm: 10},
        {month: 'Jun', rmm: 15},
        {month: 'Jul', rmm: 17},
        {month: 'Aug', rmm: 16},
        {month: 'Sep', rmm: 14},
        {month: 'Oct', rmm: 12},
        {month: 'Nov', rmm: 8},
        {month: 'Dec', rmm: 3},
    ];

    const sunHours = [
        {month: 'Jan', sh: 1},
        {month: 'Feb', sh: 2},
        {month: 'Mar', sh: 4},
        {month: 'Apr', sh: 8},
        {month: 'May', sh: 10},
        {month: 'Jun', sh: 15},
        {month: 'Jul', sh: 17},
        {month: 'Aug', sh: 16},
        {month: 'Sep', sh: 14},
        {month: 'Oct', sh: 12},
        {month: 'Nov', sh: 8},
        {month: 'Dec', sh: 3},
    ];

    return (
        <div className="chart">
            <h2 className="chart__title">{title}</h2>

            <div className="chart__content">
                {type === 'temperature' && <ResponsiveContainer debounce="1">
                    <AreaChart data={temperatures}>
                        <XAxis dataKey="month"/>
                        <YAxis/>
                        <Tooltip/>
                        <Area type='monotone' dataKey='t' stroke='#D32F2F' name="Temperature range" unit=' °C' fillOpacity={0.5} fill="#f44336" />
                    </AreaChart>
                </ResponsiveContainer>}

                {type === 'af' && <ResponsiveContainer debounce="1">
                    <LineChart data={af}>
                        <CartesianGrid strokeDasharray="1 3" />
                        <XAxis dataKey="month"/>
                        <YAxis/>
                        <Tooltip/>
                        <Line dataKey='afd' name="Air frost" unit=" days" stroke='#2196F3' strokeWidth='3' />
                    </LineChart>
                </ResponsiveContainer>}

                {type === 'rain' && <ResponsiveContainer debounce="1">
                    <BarChart data={rain}>
                        <XAxis dataKey="month"/>
                        <YAxis/>
                        <Tooltip label="hellow"/>
                        <Bar dataKey='rmm' name="Rain" unit=" mm" stroke='#64B5F6' fillOpacity={1} fill="#64B5F6" />
                    </BarChart>
                </ResponsiveContainer>}

                {type === 'sun' && <ResponsiveContainer debounce="1">
                    <AreaChart data={sunHours}>
                        <XAxis dataKey="month"/>
                        <YAxis/>
                        <Tooltip/>
                        <Area type='monotone' dataKey='sh' name="Sun" unit=" hours" stroke='#FBC02D' fillOpacity={0.5} fill="#FFEB3B" />
                    </AreaChart>
                </ResponsiveContainer>}
            </div>
        </div>
    )
};

export default Chart;
