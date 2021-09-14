import Expense from "./components/Expense";
import NewExpense from "./components/UserComponents/NewExpense";
import ExpenseFilter from "./components/UserComponents/ExpenseFilter";
// import './App.css';

function App() {

    
  const expenses = [
    {
      id: "e1",
      title: "The Hindu",
      amount: "25.3",
      date: new Date(2021, 2, 21),
    },
    {
      id: "e2",
      title: "Decan Cronicals",
      amount: "28",
      date: new Date(2021, 6, 26),
    },
    {
      id: "e3",
      title: "Times Of India",
      amount: "2",
      date: new Date(2021, 8, 28),
    },
    {
      id: "e4",
      title: "India Times",
      amount: "2503",
      date: new Date(2021, 5, 25),
    },
  ];

  const addExpenseHandler = (expense) =>{
    console.log("Apps.js", expense)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Lets get started</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <NewExpense addUserExpense = {addExpenseHandler}/>
        <ExpenseFilter/>
        <Expense
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <Expense
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <Expense
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
        <Expense
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        />
      </header>
    </div>
  );
}

export default App;
