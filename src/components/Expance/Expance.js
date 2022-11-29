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

  const filterExpance = props.data.filter((expance) => {
    return filterYear == expance.date.getFullYear();
  });

  let expanceContent = <p>No Expance Found</p>;

  if (filterExpance.length > 0) {
    expanceContent = filterExpance.map((expance) => (
      <ExpanceItem
        key={expance.id}
        title={expance.title}
        date={expance.date}
        amount={expance.amount}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        onYearChange={onYearChangeHandler}
        defaultYear={filterYear}
      />
      {expanceContent}
    </Card>
  );
}
export default Expacne;
