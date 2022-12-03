import "./budget-planner/style.css";
import Card from "./budget-planner/card";
import Expense from "./budget-planner/expense";
import { useState } from "react";

function App() {
  const budget = 4000;
  const [remaining, setRemaining] = useState(4000);
  const [spent, setSpent] = useState(0);
  const [expenseList, setExpenseList] = useState([{ cost: 0, title: "" }]);
  const addExpense = (e) => {
    e.preventDefault();
    let cost = e.target.elements.cost.value;
    let flag = cost <= remaining ? true : alert("Remaining budget is low");
    if (flag) {
      setRemaining(remaining - cost);
      setSpent(spent + parseInt(cost));
      setExpenseList([
        ...expenseList,
        {
          cost: e.target.elements.cost.value,
          title: e.target.elements.name.value,
        },
      ]);
      e.target.elements.cost.value = "";
      e.target.elements.name.value = "";
      e.target.elements.name.focus();
    }
  };
  const removeExpense = (index) => {
    const list = [...expenseList];

    setRemaining(remaining + parseInt(list[index].cost));
    setSpent(spent - parseInt(list[index].cost));
    list.splice(index, 1);
    setExpenseList(list);
  };
  return (
    <div className="App">
      <h1>My Budget Planner</h1>
      <div className="flex-box">
        <Card color="grey" title="Budget" name="budget" amount={budget} />
        <Card color="green" title="Remaining" amount={remaining} />
        <Card color="blue" title="Spent" amount={spent} />
      </div>
      <h1>Expenses</h1>
      <table id="expense-table">
        {expenseList.map((expense, index) =>
          expense.cost > 0 ? (
            <Expense
              title={expense.title}
              amount={expense.cost}
              id={index}
              remove={(event) => removeExpense(index)}
            />
          ) : (
            ""
          )
        )}
      </table>

      <h1>Add Expenses</h1>
      <form
        autoComplete="off"
        className="form-inline"
        onSubmit={(event) => addExpense(event)}
      >
        <div>
          <label for="email">Name:</label>
          <br />
          <input
            type="text"
            id="email"
            placeholder="Enter expense title"
            name="name"
            required
          />
        </div>
        <div>
          <label for="pwd">Cost:</label>
          <br />
          <input
            type="number"
            id="cost"
            placeholder="Enter expense cost"
            name="cost"
            min="1"
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;
