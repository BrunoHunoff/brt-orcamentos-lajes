import "./calculoRow.css";

function CalculoRow({ rowName,inputName, onInputChange, rowPrice, rowPercentage }) {

  const handleInputChange = (event) => {
    const { value } = event.target;
    onInputChange(inputName, value);
  };
  return (
    <div className="calculo-row">
      <span>{rowName}</span>
      <input type="text" name="contribuicao" placeholder="0%" onBlur={handleInputChange} defaultValue={rowPercentage}/>
      <span>{`R$${parseFloat(rowPrice).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}</span>
    </div>
  );
}

export default CalculoRow;
