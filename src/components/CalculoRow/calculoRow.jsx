import "./calculoRow.css";

function CalculoRow({ rowName,inputName, onInputChange, rowPrice }) {

  const handleInputChange = (event) => {
    const { value } = event.target;
    onInputChange(inputName, value);  // Chama a função para atualizar o estado na página principal
  };
  return (
    <div className="calculo-row">
      <span>{rowName}</span>
      <input type="text" name="contribuicao" placeholder="0%" onBlur={handleInputChange}/>
      <span>{`R$${parseFloat(rowPrice).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}</span>
    </div>
  );
}

export default CalculoRow;
