import React from "react";
import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'


/// We can only pass props from parent to child, so here, we are passing the form data in the 
/// object which we named expenseData. 

const NewExpense = (props) => {
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }
  
  /// onSaveExpenseData, this is the prop we're creating, a function that will eventually be triggered when something
  /// happens in this component. It is tied to the submitHandler function in the expenseForm file where the 
  /// user input form is saved!
  
  return (
    <div className="new-expense">
     <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );

};

export default NewExpense;
