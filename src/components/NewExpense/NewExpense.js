import React from "react";
import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'


/// We can only pass props from parent to child, so here, we are passing the form data in the 
/// object which we named expenseData. 

const NewExpense = (props) => {
  
  /// The enteredExpenseData is the object it's accepting from onSaveExpenseData
  const saveExpenseDataHandler = (enteredExpenseData) => {
    /// We are again, creating an object to send this to App.js, here, we add id to it, ...enteredExpenseData is
    /// just the original object.
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    /// This is going to be passed to App.js!!! The same way onSaveExpenseData was passed here!!
    props.onAddExpense(expenseData)
  }
  
  /// onSaveExpenseData, this is the prop we're creating, a function that will eventually be triggered when something
  /// happens in this component. It is tied to the submitHandler function in the expenseForm file where the 
  /// user input form (expenseData) is saved!

  return (
    <div className="new-expense">
     <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );

};

export default NewExpense;
