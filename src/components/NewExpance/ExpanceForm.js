import { useState } from "react";
import "./ExpanceForm.css";
const ExpanceForm = (props) => {
  const [enterTitle, setTitle] = useState("");
  const [enterAmt, setAmt] = useState("");
  const [enterDate, setDate] = useState("");

  const titleInputHandler = (event) => {
    setTitle(event.target.value);
  };
  const amtInputHandler = (event) => {
    setAmt(event.target.value);
  };
  const dateInputHandler = (event) => {
    setDate(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleInputHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amtInputHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2002-12-31"
            onChange={dateInputHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expance</button>
      </div>
    </form>
  );
};
export default ExpanceForm;
