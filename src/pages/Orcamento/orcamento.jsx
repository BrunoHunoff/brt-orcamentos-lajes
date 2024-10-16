import "./orcamento.css";
import Sidebar from "../../components/Sidebar/sidebar";
import Header from "../../components/Header/header";
import OrcamentoData from "../../components/OrcamentoData/orcamentoData";
import NavRow from "../../components/NavRow/navRow";
import apiLajes from "../../../services/api";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";


function Orcamento() {
  const [lajes, setLajes] = useState([]);
  const [dataRows, setDataRows] = useState([
    { id: Date.now(),
      data: ["-", "-", "-", "-", "-", "-", "-"],
      selectedLaje: null },
  ]);

  const [budgetHeader, setBudgetHeader] = useState({
    budgetId: null,
    clientName: null,
    clientId: null,
    city: null,
    state: null,
    freightType: null,
    freightPrice: null
  })

  async function getLajes() {
    const response = await apiLajes.get("/slabs");
    setLajes(response.data);
  }

  useEffect(() => {
    getLajes();
  }, []);

  const updateDataRows = (id, newData) => {
    
      setDataRows((prevDataRows) =>
        prevDataRows.map((item) =>
          item.id === id ? { ...item, data: newData.data, selectedLaje: newData.selectedLaje } : item
        )
      );
  };
  const navigate = useNavigate();

  const handleAvancar = () => {
    const requiredHeaderFields = ["clientName", "clientId", "city", "state", "freightType"]
    const headerIsValid = requiredHeaderFields.every(field => budgetHeader[field] != null && budgetHeader[field] != "")

    const rowsAreValid = dataRows.every(row => {
      return row.selectedLaje != null && row.data.every(value => value !== "-");
    });
  

    if(headerIsValid && rowsAreValid) navigate("/calculo", { state: { dataRows, budgetHeader } });

    return(
      Swal.fire({
        title: "Campos Inválidos",
        text: "Por favor, preencha os campos para continuar!",
        icon: "error",
        customClass: "error-modal"
      })
    )
  };

  return (
    <div className="orcamento">
      <Sidebar />

      <div className="content">
        <Header pageTitle="Orçamento" userName="Bruno Hunoff" />
        <OrcamentoData
          updateBudgetHeader = {setBudgetHeader}
          updateDataRows={updateDataRows}
          lajes={lajes}
          setLajes={setLajes}
          dataRows={dataRows}
          setDataRows={setDataRows}
        />
        <NavRow showVoltar={true} onNext={handleAvancar}/>
      </div>
    </div>
  );
}

export default Orcamento;
