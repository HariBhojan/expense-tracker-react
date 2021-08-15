import { useState } from "react";
import "./Expense.css";
import ExpenseDate from "./ExpenseDate";

function Expense(props) {
  const [title, setUpdatedTitle_Handler] = useState(props.title);
  return (
    <div>
      <div className="expense_container">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense_container_type">{title}</div>
        <div className="expense_container_amount">Rs {props.amount}</div>
        <button onClick={() => setUpdatedTitle_Handler('Books')}>Update Title</button>
      </div>
    </div>
  );
}

export default Expense;
