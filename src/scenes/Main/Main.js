import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import Switcher from './components/Switcher';
import Chart from './components/Chart';
import './Main.css';


class Main extends Component {
    render() {
        // const {reducers: { currentSection, menuIsOpen }, onMenuToggle } = this.props;

        return (
            <div className="main">
                <h1 className="main__heading">Bradford</h1>
                <span className="main__subheading">Weather trends since</span>

                <Switcher/>

                <div className="main__charts">
                    <div className="main__chart">
                        <Chart type="temperatures"/>
                    </div>

                    <div className="main__chart">
                        <Chart type="afDays"/>
                    </div>

                    <div className="main__chart">
                        <Chart type="rain"/>
                    </div>

                    <div className="main__chart">
                        <Chart type="sunHours"/>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect( ( {reducers} ) => ( {reducers} ), actions )(Main);
