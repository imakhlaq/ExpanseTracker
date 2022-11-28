import "./ExpanseItem.css";

function ExpanceItem() {
  const expanceDate = new Date(2021, 2, 28);
  const expanceType = "car Repair";
  const expnaceCost = 323.32;

  return (
    <div className="expense-item">
      <div>{expanceDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expanceType}</h2>
        <div className="expense-item__price">$ {expnaceCost} </div>
      </div>
    </div>
  );
}
export default ExpanceItem;
