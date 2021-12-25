import React from "react"

//// Import ExpenseDate component
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"
//// Here we are importing our css file
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //// Notice, we still use props but this time title because we're grabbing the title key from expenses
  const title = props.title;
  const amount = props.amount;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
