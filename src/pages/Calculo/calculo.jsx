import "./calculo.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/header";
import Sidebar from "../../components/Sidebar/sidebar";
import CalculoTable from "../../components/CalculoTable/calculoTable";
import ResumoTable from "../../components/ResumoTable/resumoTable";
import NavRow from "../../components/NavRow/navRow";

function Calculo({}) {
  const location = useLocation();
  const { dataRows } = location.state || { dataRows: [] };

  let footage = 0;
  let cost = 0;

  useEffect(() => {
    dataRows.forEach((row) => {
        footage += row.data[1] * row.data[5] * row.data[6];
        cost += footage * row.selectedLaje.price;
      });

  }, []);

  return (
    <div className="calculo">
      <Sidebar />

      <div className="content">
        <Header pageTitle="Calculo" userName="Bruno Hunoff" />
        <div className="tables-container">
          <CalculoTable />
          <ResumoTable />
        </div>
        <NavRow showVoltar={true} />
      </div>
    </div>
  );
}

export default Calculo;
