import NewExpance from "./NewExpance";
import { useState } from "react";
import "./Showform.css";

const ShowForm = (props) => {
  const [isFormShowing, ShowFormInput] = useState(false);

  const retriveData = (data) => {
    props.ondataRecived(data);
  };

  const clickHandler = (event) => {
    event.preventDefault();

    ShowFormInput(true);
  };
  if (isFormShowing == true) {
    return <NewExpance formState={ShowFormInput} onsubmitdata={retriveData} />;
  }

  return (
    <div className="AddNewExpance">
      <button className="AddNewExpance-btn" onClick={clickHandler}>
        Add New Expance
      </button>
    </div>
  );
};
export default ShowForm;
