import Cards from "./components/UI/Cards";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
import { useState } from "react";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [filterYear, setFilterYear] = useState("2019");

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <Cards className="expenses">
      <NewExpense onAddExpense={addExpenseHandler} />

      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      /> */}
      {expenses.map((id, index) => {
        return (
          <Cards className="expenses" key={expenses[index].id}>
            <ExpenseItem
              title={expenses[index].title}
              amount={expenses[index].amount}
              date={expenses[index].date}
            />
          </Cards>
        );
      })}
    </Cards>
  );
}

export default App;
