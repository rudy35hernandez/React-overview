import React, { useState } from "react";

import "./ExpenseForm.css";

const Expenseform = () => {
  //// creating our useState, setEnteredTitle will be used at function below
  const [enteredTitle, setEnteredTitle] = useState("");

  const [enteredAmount, setEnteredAmount] = useState("");

  const [enteredDate, setEnteredDate] = useState("");

  /// Here we are adding event listener function. Everytime we type something, React creates an object,
  /// we use our google tool. When we console log tool, we get an object, we look for target, and in that
  /// object, theres a value. This value is what we're typing!

  const titleChangeHandler = (event) => {
    //// setEnteredTitle, we use the paranthesis to add the value of setEnteredTitle, in this case,
    //// whatever we type
    setEnteredTitle(event.target.value);
  };

  const amountChangedHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData)
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            step="2022-12-31"
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
    //done
  );
};

export default Expenseform;
