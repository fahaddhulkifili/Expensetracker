import React from "react";
import Cards from "../UI/Cards";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <div>
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
    </div>
  );
};

export default Expenses;
