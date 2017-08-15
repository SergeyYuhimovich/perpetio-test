import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import Switcher from './components/Switcher';
import Chart from './components/Chart';
import './Main.css';

class Main extends Component {
    componentDidMount() {
        this.props.getWeatherData();
    }

    render() {
        const {reducers: { weatherDataLoading, data, years, currentYear, city }, onPreviousButtonClick, onNextButtonClick, onYearSelect } = this.props;

        console.log(data);
        console.log(city);
        console.log(years);
        console.log(currentYear);

        let temperatures = data.temperatures[2016];
        let afDays = data.afDays[2016];
        let rainMm = data.rainMm[2016];
        let sunHours = data.sunHours[2016];

        return (
            <div className="main">
                <h1 className="main__heading">{city}, UK</h1>
                <span className="main__subheading">{'Weather trends since ' + years[0]}</span>

                <Switcher years={years}
                          currentYear={currentYear}
                          onPreviousButtonClick={onPreviousButtonClick}
                          onNextButtonClick={onNextButtonClick}
                          onYearSelect={onYearSelect}
                />

                <div className="main__charts">
                    <div className="main__chart">
                        <Chart type="temperature"
                               data={data.temperatures[2016]}
                               title="Temperature"
                        />
                    </div>

                    <div className="main__chart">
                        <Chart type="af"
                               data={data.afDays[2016]}
                               title="Air frost"
                        />
                    </div>

                    <div className="main__chart">
                        <Chart type="rain"
                               data={data.rainMm[2016]}
                               title="Rain"
                        />
                    </div>

                    <div className="main__chart">
                        <Chart type="sun"
                               data={data.sunHours[2016]}
                               title="Sun"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect( ( {reducers} ) => ( {reducers} ), actions )(Main);
