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
            <button className="switcher__btn--previous"
                    onClick={onPreviousButtonClick}
            >
                <FontAwesome className="switcher__btn-icon"
                             name="angle-left"
                />
            </button>

            <select className="switcher__year-select" value={currentYear} onChange={onYearChange}>
                {years.map((year) =>
                    <option value={year} key={year}>{year}</option>
                )}
            </select>

            <button className="switcher__btn--next"
                    onClick={onNextButtonClick}
            >
                <FontAwesome className="switcher__btn-icon"
                             name="angle-right"
                />
            </button>
        </div>
    )
};


export default Switcher;