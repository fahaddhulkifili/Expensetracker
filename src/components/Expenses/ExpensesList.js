import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import Cards from "../UI/Cards";

const ExpensesList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }
  console.log(props.item.length);
  return (
    <ul className="expenses-list">
      {props.item.map((id, index) => {
        return (
          <Cards className="expenses" key={props.item[index].id}>
            <ExpenseItem
              title={props.item[index].title}
              amount={props.item[index].amount}
              date={props.item[index].date}
            />
          </Cards>
        );
      })}
    </ul>
  );
};

export default ExpensesList;
