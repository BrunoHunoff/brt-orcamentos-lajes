import "./orcamento.css";
import Sidebar from "../../components/Sidebar/sidebar";
import Header from "../../components/Header/header";
import OrcamentoData from "../../components/OrcamentoData/orcamentoData";
import NavRow from "../../components/NavRow/navRow";
import apiLajes from "../../../services/api";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { useContext } from "react";
import { OrcamentoContext } from "../../contexts/OrcamentoContext";


function Orcamento() {
  const [lajes, setLajes] = useState([]);
  
  const {budgetHeader, setBudgetHeader, dataRows, setDataRows} = useContext(OrcamentoContext)

  async function getLajes() {
    const response = await apiLajes.get("/slabs");
    setLajes(response.data);
  }

  useEffect(() => {
    getLajes();
    console.log(dataRows)
    console.log(budgetHeader)
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
      return row.selectedLaje != null && row.data.every(value => value !== "-" && value != "");
    });

    if(!headerIsValid || !rowsAreValid) return(
      Swal.fire({
        title: "Campos Inválidos",
        text: "Por favor, preencha os campos para continuar!",
        icon: "error",
        customClass: "error-modal"
      })
    )

    navigate("/calculo");
  };

  return (
      <div className="orcamento">
        <Sidebar />
        <div className="content">
          <Header pageTitle="Orçamento" userName="Bruno Hunoff" />
          <OrcamentoData
            updateBudgetHeader={setBudgetHeader}
            budgetHeader={budgetHeader}
            updateDataRows={updateDataRows}
            lajes={lajes}
            setLajes={setLajes}
            dataRows={dataRows}
            setDataRows={setDataRows}
          />
          <NavRow showVoltar={false} onNext={handleAvancar}/>
        </div>
      </div>
  );
}

export default Orcamento;
