import ExpanceForm from "./ExpanceForm";
import "./NewExpance.css";
const NewExpance = (props) => {
  const formDataHandler = (data) => {
    props.onsubmitdata(data);
  };
  return (
    <div className="new-expense">
      <ExpanceForm
        formState={props.formState}
        onFormSubmitData={formDataHandler}
      />
    </div>
  );
};
export default NewExpance;
