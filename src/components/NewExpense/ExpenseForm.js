import React, { useState } from "react";

import "./ExpenseForm.css";

const Expenseform = (props) => {
  //// creating our useState, setEnteredTitle will be used at function below
  ///  we can work with multiple states at a time and update them individually
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
    //// Code below prevents page from reloading, this is a built in React function
    event.preventDefault();
    ////////////////////
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    ////We include the code below to reset the forms back to blank once we submit the form. The state for each 
    ////just goes back to its original state, blank. I think this is called 2way binding

    //// props.onSaveExpenseData gets picked up by NewExpense. This is how they communicate. expenseData is passed
    /// in this as well to share the data the user typed in
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('')
    setEnteredDate('')
    setEnteredAmount('')
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" 
          value={enteredTitle} 
          /// We want to set the value to each section blank, that way when we run the submitHandler func,
            /// we return the state of each form back to blank
          onChange={titleChangeHandler} />
        </div> 
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01"
            /// We want to set the value to each section blank, that way when we run the submitHandler func,
            /// we return the state of each form back to blank
            value={enteredAmount}
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2021-01-01" step="2022-12-31"
            value={enteredDate}
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



