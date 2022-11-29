import ExpanceItem from "./ExpanseItem";
const ExpancesList = (props) => {
  let expanceContent = <p>No expance Found</p>;
  if (props.filerExpance.length > 0) {
    expanceContent = props.filerExpance.map((exp) => (
      <ExpanceItem
        key={exp.id}
        title={exp.title}
        date={exp.date}
        amount={exp.amount}
      />
    ));
  }
  return expanceContent;
};
export default ExpancesList;
