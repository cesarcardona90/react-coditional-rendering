import React from 'react';
import './information.style.css';
const Information = (props) => {
    return (
        <div className="information-container">
           {
               props.information.grade < 3
               ? //if-true
                    <span className="information-without-over">{props.information.name}</span>
               : //else
                    <span>{props.information.name}</span>

           }
           {' '}{props.information.grade}
        </div> 
    );
}

export default Information;