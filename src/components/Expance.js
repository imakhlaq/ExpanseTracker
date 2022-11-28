import ExpanceItem from "./ExpanseItem";
import "./Expance.css";

function Expacne(props) {
  return (
    <div className="expenses">
      <h2>Let's get started!</h2>
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
    </div>
  );
}
export default Expacne;
