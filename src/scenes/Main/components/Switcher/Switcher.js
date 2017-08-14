import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import FontAwesome from 'react-fontawesome';
import './Switcher.css';


const Switcher = ( {years, currentYear, onPreviousButtonClick, onNextButtonClick, onYearSelect} ) => {

    let onYearChange = function(e) {
        e.preventDefault();

        onYearSelect(e.target.value);
    };

    let options = [
        { className: 'year-select__option', value: 'one', label: 'One' },
        { className: 'year-select__option', value: 'two', label: 'Two' }
    ];

    function logChange(val) {
        console.log("Selected: " + JSON.stringify(val));
    }

    return (
        <div className="switcher">
            <button className="btn--previous"
                    onClick={onPreviousButtonClick}
            >
                <FontAwesome className="btn__icon"
                             name="angle-left"
                />
            </button>

            <Select
                className="year-select"
                value="one"
                options={options}
                onChange={logChange}
            />

            <button className="btn--next"
                    onClick={onNextButtonClick}
            >
                <FontAwesome className="btn__icon"
                             name="angle-right"
                />
            </button>
        </div>
    )
};


export default Switcher;