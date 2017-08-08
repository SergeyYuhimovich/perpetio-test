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
                <h1 className="heading">Bradford</h1>

                <Switcher/>

                <Chart type="temperatures"/>
                <Chart type="afDays"/>
                <Chart type="rain"/>
                <Chart type="sunHours"/>
            </div>
        )
    }
}


export default connect( ( {reducers} ) => ( {reducers} ), actions )(Main);
