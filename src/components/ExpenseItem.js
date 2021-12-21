//// Import ExpenseDate component
import ExpenseDate from "./ExpenseDate";
//// Here we are importing our css file
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //// Notice, we still use props but this time title because we're grabbing the title key from expenses
  const title = props.title;
  const amount = props.amount;

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
