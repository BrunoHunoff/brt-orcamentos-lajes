import "./orcamento.css";
import Sidebar from "../../components/Sidebar/sidebar";
import Header from "../../components/Header/header";
import OrcamentoData from "../../components/OrcamentoData/orcamentoData";
import NavRow from "../../components/NavRow/navRow";
import apiLajes from "../../../services/api";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from 'react-router-dom';

function Orcamento() {
  const [lajes, setLajes] = useState([]);
  const [dataRows, setDataRows] = useState([
    { id: Date.now(),
      data: ["-", "-", "-", "-", "-", "-", "-"],
      selectedLaje: null },
  ]);

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
    console.log("Dados salvos:", dataRows);

    navigate("/calculo", { state: { dataRows } });
  };

  return (
    <div className="orcamento">
      <Sidebar />

      <div className="content">
        <Header pageTitle="Orçamento" userName="Bruno Hunoff" />
        <OrcamentoData
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
