import ExpanceItem from "./ExpanseItem";
import "./ExpancesList.css";
const ExpancesList = (props) => {
  if (props.filerExpance.length === 0) {
    return <h2 className="expenses-list__fallback">No expance Found</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.filerExpance.map((exp) => (
        <ExpanceItem
          key={exp.id}
          title={exp.title}
          date={exp.date}
          amount={exp.amount}
        />
      ))}
    </ul>
  );
};
export default ExpancesList;
