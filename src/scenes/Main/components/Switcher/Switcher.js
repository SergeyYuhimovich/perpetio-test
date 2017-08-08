import React from 'react';
import './Switcher.css';


const Switcher = () => {
    return (
        <div className="switcher">
            <button className="switcher__btn--previous">prev</button>

            <select className="switcher__year-select">
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
            </select>

            <button className="switcher__btn--next">next</button>
        </div>
    )
};


export default Switcher;