import "./calculo.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/header";
import Sidebar from "../../components/Sidebar/sidebar";
import NavRow from "../../components/NavRow/navRow";
import CalculoRow from "../../components/CalculoRow/calculoRow";
import ResumoRow from "../../components/ResumoRow/resumoRow";

function Calculo({}) {
  const location = useLocation();
  const { dataRows } = location.state || { dataRows: [] };
  const [totalFootage, setTotalFootage] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);

  const [rowPercentage, setRowPercentage] = useState({
    contribuicao: {
      percentage: 0,
      value: 0
    },
    comissao: {
      percentage: 0,
      value: 0
    },
    admin: {
      percentage: 0,
      value: 0
    },
    tributario: {
      percentage: 0,
      value: 0
    },
    extra: {
      percentage: 0,
      value: 0
    },
  });

  const [totalPercentage, setTotalPercentage] = useState(0);

  const [sellPrice, setSellPrice] = useState(0);

  const handleRowPercentageChange = (name, value) => {
    const updatePercentage = parseFloat(value) || 0;

    const updateRowPercentage = {
      ...rowPercentage,
      [name] : {
        ...rowPercentage[name],
        percentage: updatePercentage,
        value: updatePercentage * sellPrice / 100
      }
    }

    setRowPercentage(updateRowPercentage)

    const total = Object.values(updateRowPercentage).reduce((acc, curr) => acc + curr.percentage, 0);
    setTotalPercentage(total);
    setSellPrice(totalCost / (1 -(total/100))) //markup price
  }


  useEffect(() => {
    let footage = 0;
    let cost = 0;
    let weight = 0;

    dataRows.forEach((row) => {
      footage+= (row.data[1] * row.data[5] * row.data[6]);
      cost+= (footage * row.selectedLaje.price);
      weight = (footage * row.selectedLaje.weight);
    });

    setTotalFootage(footage);
    setTotalCost(cost);
    setTotalWeight(weight)
  }, []);

  return (
    <div className="calculo">
      <Sidebar/>

      <div className="content">
        <Header pageTitle="Calculo" userName="Bruno Hunoff" />
        <div className="tables-container">
          <div className="calculo-table">
            <h2 className="calculo-title-row">Contribuição</h2>

            <div className="calculo-table-content">
              <CalculoRow rowName="Contribuição" inputName="contribuicao" onInputChange={handleRowPercentageChange} rowPrice={rowPercentage.contribuicao.value}/>
              <CalculoRow rowName="Comissão" inputName="comissao" onInputChange={handleRowPercentageChange}rowPrice={rowPercentage.comissao.value} />
              <CalculoRow rowName="Admin" inputName="admin" onInputChange={handleRowPercentageChange} rowPrice={rowPercentage.admin.value}/>
              <CalculoRow rowName="Tributário" inputName="tributario" onInputChange={handleRowPercentageChange} rowPrice={rowPercentage.tributario.value}/>
              <CalculoRow rowName="Extra" inputName="extra" onInputChange={handleRowPercentageChange} rowPrice={rowPercentage.extra.value}/>
              <div className="total-row">
                <span>Total</span>
                <span className="total-perc">{`${totalPercentage}%`}</span>
                <span>{`R$${sellPrice}`}</span>
              </div>
            </div>
          </div>

          <div className="calculo-table">
            <h2 className="calculo-title-row">Resumo</h2>

            <div className="calculo-table-content">
                <ResumoRow rowName="Custo Total" content={`R$${totalCost}`}/>
                <ResumoRow rowName="Área Total" content={`${totalFootage}m²`}/>
                <ResumoRow rowName="RS/m²"/>
                <ResumoRow rowName="Peso Total" content={(`${totalWeight}kg`)}/>
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
