import React, { useState } from "react";

//// Import ExpenseDate component
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
//// Here we are importing our css file
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  /////// A react hook //////////
  //// We use, useState (built in method). The useState will take in the variable you want to manipulate
  //// useState creates an array of ONLY TWO elements, first being the original value, second being what you want
  //// that value to change to. Here, we are using desconstruction.
  const newState = "Updated!!!"
  const [title, setTitle] = useState(props.title);

  
 //// Here we create our function that will help us change the state of our element.
  const clickHandler = () => {
    /// We declare the value for our 2nd element here, by calling on it, with the parameter being our value.
    setTitle(newState)
    console.log(title);
  };
  /// onClick, onChange, these are all react built in methods. 

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
