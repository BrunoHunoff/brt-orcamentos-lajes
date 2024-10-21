import { useState, useEffect } from "react";
import Input from "../Input/input";
import "./orcamentoDataHeader.css";
import apiLajes from "../../../services/api";

function OrcamentoDataHeader({ updateBudgetHeader, budgetHeader }) {
  const [clientes, setClientes] = useState([]);

  async function getClientes() {
    const request = await apiLajes.get("/costumers");
    setClientes(request.data);
  }

  useEffect(() => {
    getClientes();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    updateBudgetHeader((prevHeader) => ({
      ...prevHeader,
      [id]: value,
    }));
  };

  const handleChangeClient = (e) => {
    const { value } = e.target;
    const [clientId, clientName] = value.split(",");
    updateBudgetHeader((prevHeader) => ({
      ...prevHeader,
      clientId: clientId,
      clientName: clientName,
    }));
  };

  return (
    <div className="orcamentoDataHeader">
      <div className="number-row">
        <Input
          labelFor=""
          labelText="Nº Orçamento"
          inputType="text"
          placeHolder="00-000-0000"
          inputId="budgetId"
          width="140px"
          textAlign="center"
          onChange={handleChange}
          value={budgetHeader.budgetId || ""}
        />
      </div>

      <div className="data-row">
        <div className="select-container">
          <label htmlFor="clientes">Cliente</label>
          <select
            id="clientName"
            className="clientes-select"
            onChange={handleChangeClient}
            value={
              budgetHeader.clientId
                ? `${budgetHeader.clientId},${budgetHeader.clientName}`
                : ""
            }
          >
            <option value="" hidden>
              -
            </option>
            {clientes.map((cliente, index) => {
              return (
                <option key={index} value={[cliente.id, cliente.name]}>
                  {cliente.name}
                </option>
              );
            })}
          </select>
        </div>
        <Input
          labelText="Cidade"
          inputType="text"
          placeHolder="Selecione"
          inputId="city"
          width="220px"
          onChange={handleChange}
          value={budgetHeader.city || ""}
        />
        <Input
          labelText="UF"
          inputType="text"
          placeHolder="UF"
          inputId="state"
          width="60px"
          onChange={handleChange}
          value={budgetHeader.state || ""}
        />
        <div className="select-container">
          <label htmlFor="frete">Frete</label>
          <select
            id="freightType"
            className="frete-select"
            onChange={handleChange}
            defaultValue={budgetHeader.freightType || ""}
          >
            <option value="" hidden>
              -
            </option>
            <option value="FOB">FOB</option>
            <option value="CIF">CIF</option>
          </select>
        </div>
        <Input
          labelText="Valor Carga"
          inputType="text"
          placeHolder="R$"
          inputId="freightPrice"
          width="180px"
          onChange={handleChange}
          value={budgetHeader.freightPrice || ""}
        />
      </div>
    </div>
  );
}

export default OrcamentoDataHeader;
