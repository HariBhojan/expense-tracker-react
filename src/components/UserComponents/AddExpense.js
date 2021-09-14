import React, { useState } from "react";
import "./AddExpense.css";

function AddExpense(props) {
  const [entertedDate, addNewUserExpenseDate] = useState("");
  const [enteredItem, addNewUserExpenseItem] = useState("");
  const [enteredAmount, addNewUserExpenseAmount] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredItem,
      amount: enteredAmount,
      date: entertedDate,
    };
    props.whenNewExpenseSaved(expenseData);
    addNewUserExpenseDate("");
    addNewUserExpenseItem("");
    addNewUserExpenseAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="container">
        <div>
          Date
          <input
            type="date"
            value={entertedDate}
            onChange={(event) => {
              const newDate = event.target.value;
              addNewUserExpenseDate(newDate);
            }}
          ></input>
        </div>
        <div>
          Item/Title
          <input
            type="text"
            value={enteredItem}
            onChange={(event) => {
              const newItem = event.target.value;
              addNewUserExpenseItem(newItem);
            }}
          ></input>
        </div>
        <div>
          Amount Rs
          <input
            type="number"
            value={enteredAmount}
            onChange={(event) => {
              const newAmount = event.target.value;
              addNewUserExpenseAmount(newAmount);
            }}
          ></input>
        </div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default AddExpense;
