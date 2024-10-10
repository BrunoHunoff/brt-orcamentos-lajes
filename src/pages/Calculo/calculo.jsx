import "./calculo.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/header";
import Sidebar from "../../components/Sidebar/sidebar";
import ResumoTable from "../../components/ResumoTable/resumoTable";
import NavRow from "../../components/NavRow/navRow";
import CalculoRow from "../../components/CalculoRow/calculoRow";
import ResumoRow from "../../components/ResumoRow/resumoRow";

function Calculo({}) {
  const location = useLocation();
  const { dataRows } = location.state || { dataRows: [] };
  const [totalFootage, setTotalFootage] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  let cost = 0;

  useEffect(() => {
    dataRows.forEach((row) => {
      setTotalFootage(totalFootage + (row.data[1] * row.data[5] * row.data[6]));
      setTotalCost(totalCost + totalFootage * row.selectedLaje.price);

    });
  }, []);

  return (
    <div className="calculo">
      <Sidebar />

      <div className="content">
        <Header pageTitle="Calculo" userName="Bruno Hunoff" />
        <div className="tables-container">
          <div className="calculo-table">
            <h2 className="calculo-title-row">Contribuição</h2>

            <div className="calculo-table-content">
              <CalculoRow rowName="Contribuição" />
              <CalculoRow rowName="Comissão" />
              <CalculoRow rowName="Admin" />
              <CalculoRow rowName="Tributário" />
              <CalculoRow rowName="Extra" />
              <div className="total-row">
                <span>Total</span>
                <span className="total-perc">54%</span>
                <span>R$18.850,00</span>
              </div>
            </div>
          </div>

          <div className="calculo-table">
            <h2 className="calculo-title-row">Resumo</h2>

            <div className="calculo-table-content">
                <ResumoRow rowName="Custo Total" content={`R$${totalCost}`}/>
                <ResumoRow rowName="Área Total" content={`${totalFootage}m²`}/>
                <ResumoRow rowName="RS/m²"/>
                <ResumoRow rowName="Peso Total"/>
                <ResumoRow rowName="Quantidade Fretes"/>
                <ResumoRow rowName="R$/Frete"/>
            </div>
          </div>
        </div>
        <NavRow showVoltar={true} />
      </div>
    </div>
  );
}

export default Calculo;
