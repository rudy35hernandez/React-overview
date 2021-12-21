//// Here we are importing our css file
import './ExpenseItem.css'

function ExpenseItem(props) {

    ////Here we are creating variables for these props so it looks cleaner below.
    ////Props gets added as a parameter in the function. The props then grabs the key in expenses object from app.js
    //// toLocalString is a built in JS function, parameter is language, then how you want the date displayed
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();
    //// Notice, we still use props but this time title because we're grabbing the title key from expenses
    const title = props.title;
    const amount = props.amount

  return ( <div className='expense-item'>
      <div>
          <div>{month}</div>
          <div>{day}</div>
          <div>{year}</div>
      </div>
      <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>$ {amount}</div>
      </div>
  </div>

  ) 
}

export default ExpenseItem;
