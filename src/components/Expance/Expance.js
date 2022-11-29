import { useState } from "react";
import ExpanceItem from "./ExpanseItem";
import "./Expance.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpanceFilter";

function Expacne(props) {
  const [filterYear, setYear] = useState("2020");
  console.log(props);
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
      {props.data.map((expance) => (
        <ExpanceItem
          title={expance.title}
          date={expance.date}
          amount={expance.amount}
        />
      ))}
    </Card>
  );
}
export default Expacne;
