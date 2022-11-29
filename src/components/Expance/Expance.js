import { useState } from "react";
import ExpanceItem from "./ExpanseItem";
import "./Expance.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpanceFilter";

function Expacne(props) {
  const [filterYear, setYear] = useState("2020");
  const onYearChangeHandler = (choosenyear) => {
    setYear(choosenyear);
  };
  return (
    <Card className="expenses">
      <h2>Let's get started!</h2>
      <ExpensesFilter
        onYearChange={onYearChangeHandler}
        defaultYear={filterYear}
      />
      <ExpanceItem
        title={props.data[0].title}
        date={props.data[0].date}
        amount={props.data[0].amount}
      />
      <ExpanceItem
        title={props.data[1].title}
        date={props.data[1].date}
        amount={props.data[1].amount}
      />
      <ExpanceItem
        title={props.data[2].title}
        date={props.data[2].date}
        amount={props.data[2].amount}
      />
    </Card>
  );
}
export default Expacne;
