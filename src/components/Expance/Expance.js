import { useState } from "react";
import "./Expance.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpanceFilter";
import ExpancesList from "./ExpancesList";

function Expacne(props) {
  const [filterYear, setYear] = useState("2020");
  const onYearChangeHandler = (choosenyear) => {
    setYear(choosenyear);
  };

  const filterExpance = props.data.filter((expance) => {
    return filterYear == expance.date.getFullYear();
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onYearChange={onYearChangeHandler}
        defaultYear={filterYear}
      />
      <ExpancesList filerExpance={filterExpance} />
    </Card>
  );
}
export default Expacne;
