import React, { useState } from "react";

//// Import ExpenseDate component
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
//// Here we are importing our css file
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  /////// A react hook //////////
  const [title, setTitle] = useState(props.title);

  //// Notice, we still use props but this time title because we're grabbing the title key from expenses
  
 
  const clickHandler = () => {
    setTitle("New Title")
    console.log(title);
  };

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
