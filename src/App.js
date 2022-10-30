//import ExpenseItem from "./components/ExpenseItem";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2019, 3, 24),
  },

  { id: "e2",
    title: "New TV", 
    amount: 799.49,
    date: new Date(2020, 5, 4) 
},
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 7, 9),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 9, 14),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses item={expenses} />
    </div>
  );
};
export default App;
