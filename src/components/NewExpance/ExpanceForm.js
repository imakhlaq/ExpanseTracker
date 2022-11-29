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

  const submitHandler = (event) => {
    //recording value
    event.preventDefault();
    const expanceData = {
      title: enterTitle,
      amt: enterAmt,
      date: new Date(enterDate),
    };
    //setting value to default
    setDate("");
    setAmt("");
    setTitle("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleInputHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterAmt}
            onChange={amtInputHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2002-12-31"
            max="2019-01-01"
            value={enterDate}
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
