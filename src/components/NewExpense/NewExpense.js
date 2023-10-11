import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [toggleForm, setToggleForm] = useState(false);
  const saveExpenseDataHandler = (enterdExpenseData) => {
    const expenseDate = {
      ...enterdExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseDate);
    props.onAddExpense(expenseDate);
    setToggleForm(false);
  };
  const clickHandler = () => {
    setToggleForm(true);
  };

  const cancelClickHandler = () => {
    setToggleForm(false);
  };

  return (
    <div className="new-expense">
      {toggleForm ? (
        <ExpenseForm
          onSaveExpenseDate={saveExpenseDataHandler}
          cancelAction={cancelClickHandler}
        />
      ) : (
        <div className="new-expenses__actions">
          <button onClick={clickHandler}>Add new Expense</button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
