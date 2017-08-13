import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Switcher.css';


const Switcher = ( {years, currentYear, onPreviousButtonClick, onNextButtonClick, onYearSelect} ) => {

    let onYearChange = function(e) {
        e.preventDefault();

        onYearSelect(e.target.value);
    };

    return (
        <div className="switcher">
            <button className="btn--previous"
                    onClick={onPreviousButtonClick}
            >
                <FontAwesome className="btn__icon"
                             name="angle-left"
                />
            </button>

            <select className="year-select" value={currentYear} onChange={onYearChange}>
                {years.map((year) =>
                    <option value={year} key={year}>{year}</option>
                )}
            </select>

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