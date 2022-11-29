import { useState } from "react";
import Expacne from "./components/Expance/Expance";
import ShowForm from "./components/NewExpance/ShowForm";
import NewExpance from "./components/NewExpance/NewExpance";

const DUMY_EXPANCCE = [
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

function App() {
  const [expenses, setExpance] = useState(DUMY_EXPANCCE);

  const retriveData = (data) => {
    setExpance((prevExpance) => {
      return [data, ...prevExpance];
    });
  };
  return (
    <div>
      <ShowForm ondataRecived={retriveData} />

      <Expacne data={expenses} />
    </div>
  );
}

export default App;
