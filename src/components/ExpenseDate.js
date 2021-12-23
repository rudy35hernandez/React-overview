import React from "react"
import './ExpenseDate.css'

function ExpenseDate(props){

    ////Here we are creating variables for these props so it looks cleaner below.
    ////Props gets added as a parameter in the function. The props then grabs the key in expenses object from app.js
    //// toLocalString is a built in JS function, parameter is language, then how you want the date displayed
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (

        <div className="expense-date">
          <div className="expense-date__month">{month}</div>
          <div className="expense-date__day">{day}</div>
          <div className="expense-date__year">{year}</div>
      </div>
    )
}

export default ExpenseDate;