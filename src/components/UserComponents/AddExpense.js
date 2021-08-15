import React, {useState} from 'react';
import './AddExpense.css';


function AddExpense(){
    // const [date, addNewUserExpenseDate_handler] = useState("");
    // const [item, addNewUserExpenseItem_handler] = useState("");
    // const [amount, addNewUserExpenseAmount_handler] = useState("");
    // const addNewUserExpense_Handler = ()=>{console.log("Add Clicked")};
    const [InitialData, setNewData] = useState({
        title: addNewUserExpenseDate_handler(event.target.value()),
    })
    return (<div className='container'>
        <div>Date
        <input type='date' 
            onChange={(event)=> addNewUserExpenseDate_handler(event.target.value())}></input>
        </div>
        <div>Item/Title
        <input type='text' 
        onChange={(event)=> addNewUserExpenseItem_handler(event.target.value())}></input>
        </div>
        <div>Amount Rs
        <input type='number' onChange={(event)=> addNewUserExpenseAmount_handler(event.target.value())}></input>
        </div>
        <button type="submit" onClick={()=>addNewUserExpense_Handler= () => {setNewdata(...spreadUserInput)}}>Add</button>
    </div>);
}

export default AddExpense;