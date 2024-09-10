import Input from "../Input/input";
import "./orcamentoDataHeader.css";

function OrcamentoDataHeader() {
  return (
    <div className="orcamentoDataHeader">
      <div className="number-row">
        <Input
          labelFor=""
          labelText="Nº Orçamento"
          inputType="text"
          placeHolder="00-000-0000"
          inputId="orcamentoNumber"
          width="140px"
          textAlign="center"
        />
      </div>

      <div className="data-row">
        <div className="select-container">
          <label htmlFor="clientes">Cliente</label>
          <select id="clientes" className="clientes-select"> {/* Melhorar essa solução para um dropdown mais elaborado */}
            <option value="opcao1">Cliente 1</option>
            <option value="opcao2">Cliente 2</option>
            <option value="opcao3">Cliente 3</option>
          </select>
        </div>
        <Input
          labelText="Cidade"
          inputType="text"
          placeHolder="Selecione"
          inputId="orcamentoCity"
          width="220px"
        />
        <Input
          labelText="UF"
          inputType="text"
          placeHolder="UF"
          inputId="orcamentoUf"
          width="60"
          px
        />
        <div className="select-container">
          <label htmlFor="frete">Frete</label>
          <select id="frete" className="frete-select">
            <option value="opcao1">FOB</option>
            <option value="opcao2">CIF</option>
          </select>
        </div>
        <Input
          labelText="Valor Carga"
          inputType="text"
          placeHolder="R$"
          inputId="freightPrice"
          width="180px"
        />
      </div>
    </div>
  );
}

export default OrcamentoDataHeader;
