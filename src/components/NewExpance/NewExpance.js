import ExpanceForm from "./ExpanceForm";
import "./NewExpance.css";
const NewExpance = (props) => {
  const formDataHandler = (data) => {
    props.ondataRecive(data);
  };
  return (
    <div className="new-expense">
      <ExpanceForm onFormSubmitData={formDataHandler} />
    </div>
  );
};
export default NewExpance;
