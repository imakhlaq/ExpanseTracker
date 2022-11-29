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
      amount: enterAmt,
      date: new Date(enterDate),
      id: Math.random(),
    };
    //sending data to NewExpacne
    props.onFormSubmitData(expanceData);
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
            min="2019-01-01"
            max="2022-12-31"
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
