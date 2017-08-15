import React from "react";
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

import "./Chart.css";

const Chart = ( {type, data, title} ) => {
    return (
        <div className="chart">
            <h2 className="chart__title">{title}</h2>

            {data && <div className="chart__content">
                {type === 'temperature' && <ResponsiveContainer debounce={1}>
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0" stopColor="#f44336"/>
                                <stop offset="0.45" stopColor="#ffeb3b"/>
                                <stop offset="0.55" stopColor="#ffeb3b"/>
                                <stop offset="1" stopColor="#2196f3"/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="2 3" />
                        <XAxis dataKey="month"/>
                        <YAxis/>
                        <Tooltip/>
                        <Area type='monotone' dataKey='value' stroke='#ffeb3b' name="Temperature range" unit=' °C' fill="url(#fill)" fillOpacity={1} />
                    </AreaChart>
                </ResponsiveContainer>}

                {type === 'af' && <ResponsiveContainer debounce={1}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="2 3" />
                        <XAxis dataKey="month"/>
                        <YAxis/>
                        <Tooltip/>
                        <Line dataKey='value' name="Air frost" unit=" days" stroke='#2196F3' strokeWidth='5' />
                    </LineChart>
                </ResponsiveContainer>}

                {type === 'rain' && <ResponsiveContainer debounce={1}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="2 3" />
                        <XAxis dataKey="month"/>
                        <YAxis/>
                        <Tooltip label="hellow"/>
                        <Bar dataKey='value' name="Rain" unit=" mm" stroke='#64B5F6' fillOpacity={1} fill="#64B5F6" />
                    </BarChart>
                </ResponsiveContainer>}

                {type === 'sun' && <ResponsiveContainer debounce={1}>
                    <AreaChart data={data}>
                        <CartesianGrid strokeDasharray="2 3" />
                        <XAxis dataKey="month"/>
                        <YAxis/>
                        <Tooltip/>
                        <Area type='monotone' dataKey='value' name="Sun" unit=" hours" stroke='#FBC02D' fillOpacity={0.5} fill="#FFEB3B" />
                    </AreaChart>
                </ResponsiveContainer>}
            </div>}
        </div>
    )
};

export default Chart;
