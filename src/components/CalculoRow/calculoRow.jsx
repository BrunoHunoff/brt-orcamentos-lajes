import "./calculoRow.css";

function CalculoRow({ rowName }) {
  return (
    <div className="calculo-row">
      <span>{rowName}</span>
      <input type="text" name="contribuicao" />
      <span>R$6.400,00</span>
    </div>
  );
}

export default CalculoRow;
