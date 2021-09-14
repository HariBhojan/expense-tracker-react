import React from "react";
import AddExpense from "./AddExpense";

function NewExpense(props){
    const saveTheExpenseHandler = (userProvidedData) => {
        const expenseData = {
            ...userProvidedData,
            id: Math.random().toString()
        }; 
        console.log(expenseData);
        props.addUserExpense(expenseData);
    }

    return (
        <div className = "newExpense">
            <AddExpense whenNewExpenseSaved = {saveTheExpenseHandler}/>
        </div>
    );
}

export default  NewExpense;