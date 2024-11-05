import "./orcamento.css";
import Sidebar from "../../components/Sidebar/sidebar";
import Header from "../../components/Header/header";
import OrcamentoData from "../../components/OrcamentoData/orcamentoData";
import NavRow from "../../components/NavRow/navRow";
import apiLajes from "../../../services/api";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Swal from "sweetalert2";
import { useContext } from "react";
import { OrcamentoContext } from "../../contexts/OrcamentoContext";


function Orcamento() {
  const [lajes, setLajes] = useState([]);
  
  const {
    dataRows,
    setDataRows,
    budgetHeader,
    setBudgetHeader,
    setRowPercentage,
    } = useContext(OrcamentoContext)

  const {id} = useParams()

  async function getData(id) {
    const response = await apiLajes.get(`/budgets/${id}`);
    const requestData = response.data;

    const newBudgetHeader = {
      budgetId: requestData.id,
      clientName: requestData.costumerName,
      clientId: requestData.costumerId,
      city: requestData.city,
      state: requestData.state,
      freightType: requestData.freightType,
      freightPrice: requestData.freightPrice,
      freightWeight: requestData.freightWeight,
    };
    setBudgetHeader(newBudgetHeader);

    const newDataRows = requestData.slabs.map((slab) => ({
      id: slab.id,
      data: [
        slab.id,
        slab.slabsNumber,
        (lajes.find(l => l.id === slab.slabId)).name,
        slab.length,
        slab.overload,
        slab.width,
        slab.length,
      ],
      selectedLaje: lajes.find(l => l.id === slab.slabId),
    }));

    setDataRows(newDataRows);

    const newRowPercentage = {
      contribuicao: { percentage: requestData.profit || 0, value: 0 },
      comissao: { percentage: 0, value: 0 },
      admin: { percentage: requestData.administration || 0, value: 0 },
      tributario: { percentage: requestData.taxes || 0, value: 0 },
      extra: { percentage: requestData.extra || 0, value: 0 },
    };
    setRowPercentage(newRowPercentage);

  }  

  async function getLajes() {
    const response = await apiLajes.get("/slabs");
    setLajes(response.data);
  }

  useEffect(() => {
    getLajes();
  }, []);

  useEffect(() => {
    if(id) getData(id)
  }, [lajes])

  const updateDataRows = (id, newData) => {
    
      setDataRows((prevDataRows) =>
        prevDataRows.map((item) =>
          item.id === id ? { ...item, data: newData.data, selectedLaje: newData.selectedLaje } : item``
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
          <NavRow showVoltar={false} showAvancar={true} onNext={handleAvancar}/>
        </div>
      </div>
  );
}

export default Orcamento;
