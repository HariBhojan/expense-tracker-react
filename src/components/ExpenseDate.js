import React from 'react';
import './ExpenseDate.css';

function ExpenseDate(props){
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    return <div className="ExpenseDate_container">
        <div className="ExpenseDate_container-Elements">{props.date.getDate()} </div>
        <div className="ExpenseDate_container-Elements">{monthNames[props.date.getMonth()]}</div>
        <div className="ExpenseDate_container-Elements">{props.date.getFullYear()}</div>
    </div>;
}

export default ExpenseDate;