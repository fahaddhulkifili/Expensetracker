import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enterdExpenseData) => {
    const expenseDate = {
      ...enterdExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseDate);
    props.onAddExpense(expenseDate);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
