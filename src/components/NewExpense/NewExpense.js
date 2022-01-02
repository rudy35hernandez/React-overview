import React from "react";
import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'


/// We can only pass props from parent to child, so here, we are passing the form data in the 
/// object which we named expenseData. 
/// onSaveExpenseData, this is the prop we're creating, a function that will eventually be triggered when something
/// happens in this component, in this case, when the user saves

const NewExpense = () => {

  const onSaveExpenseData

  return (
    <div className="new-expense">
     <ExpenseForm onSaveExpenseData/>
    </div>
  );
};

export default NewExpense;
