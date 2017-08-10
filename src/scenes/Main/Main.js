import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import Switcher from './components/Switcher';
import Chart from './components/Chart';
import './Main.css';


class Main extends Component {
    render() {
        const {reducers: { years, currentYear }, onPreviousButtonClick, onNextButtonClick, onYearSelect } = this.props;

        return (
            <div className="main">
                <h1 className="main__heading">Bradford</h1>
                <span className="main__subheading">{'Weather trends since ' + years[0]}</span>

                <Switcher years={years}
                          currentYear={currentYear}
                          onPreviousButtonClick={onPreviousButtonClick}
                          onNextButtonClick={onNextButtonClick}
                          onYearSelect={onYearSelect}
                />

                <div className="main__charts">
                    <div className="main__chart">
                        <Chart type="temperatures"
                               title="Maximal and minimal temperatures, °C"
                        />
                    </div>

                    <div className="main__chart">
                        <Chart type="af"
                               title="Air frost days"
                        />
                    </div>

                    <div className="main__chart">
                        <Chart type="rain"
                               title="Rain, mm"
                        />
                    </div>

                    <div className="main__chart">
                        <Chart type="sunHours"
                               title="Sun hours"
                        />
                    </div>
                </div>
            </div>
        )
    }
}


export default connect( ( {reducers} ) => ( {reducers} ), actions )(Main);
