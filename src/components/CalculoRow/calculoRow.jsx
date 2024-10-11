import "./calculoRow.css";

function CalculoRow({ rowName,inputName, onInputChange, rowPrice }) {

  const handleInputChange = (event) => {
    const { value } = event.target;
    onInputChange(inputName, value);  // Chama a função para atualizar o estado na página principal
  };
  return (
    <div className="calculo-row">
      <span>{rowName}</span>
      <input type="text" name="contribuicao" onBlur={handleInputChange}/>
      <span>{`R$${rowPrice}`}</span>
    </div>
  );
}

export default CalculoRow;
