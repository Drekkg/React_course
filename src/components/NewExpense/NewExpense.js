import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [editData, setEditData] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    setEditData(false);
    props.onAddExpense(expenseData);
  };
  const onAddExpenseHandler = () => {
    setEditData(true);
  };
  const cancelEditing = () => {
    setEditData(false);
    console.log("cancelled")
  };
  return (
    <div className="new-expense">
      {!editData && (
        <button onClick={onAddExpenseHandler}>Add New Expense</button>
      )}
      {editData && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
