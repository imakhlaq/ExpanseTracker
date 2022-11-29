import NewExpance from "./NewExpance";
import { useState } from "react";

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

  return <button onClick={clickHandler}>Show Form</button>;
};
export default ShowForm;
