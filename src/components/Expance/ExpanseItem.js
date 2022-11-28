import { useState } from "react";
import Card from "../UI/Card";
import ExpanceDate from "./ExpanceDate";
import "./ExpanseItem.css";

function ExpanceItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("update");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpanceDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.amount} </div>
      </div>
      <button onClick={clickHandler}>click Here</button>
    </Card>
  );
}
export default ExpanceItem;
