import React from "react";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-GB", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("day", { month: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-year">{year}</div>
      <div className="expense-day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
