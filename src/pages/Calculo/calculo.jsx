import "./calculo.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/header";
import Sidebar from "../../components/Sidebar/sidebar";
import NavRow from "../../components/NavRow/navRow";
import CalculoRow from "../../components/CalculoRow/calculoRow";
import ResumoRow from "../../components/ResumoRow/resumoRow";
import { useContext } from "react";
import { OrcamentoContext } from "../../contexts/OrcamentoContext";


function Calculo({}) {
  const {budgetHeader, dataRows, rowPercentage, setRowPercentage} = useContext(OrcamentoContext)
  const [totalFootage, setTotalFootage] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);
  const [pricePerMeter, setPricePerMeter] = useState(0);  

  const [totalPercentage, setTotalPercentage] = useState(0);

  const [sellPrice, setSellPrice] = useState(0);

  function updateValues(rowPercentage) {
    const total = Object.values(rowPercentage).reduce(
      (acc, curr) => acc + curr.percentage,
      0
    );
    setTotalPercentage(total);

    const newSellPrice = totalCost / (1 - total / 100);
    setSellPrice(newSellPrice.toFixed(2));

    const newPricePerMeter = (newSellPrice / totalFootage).toFixed(2);
    setPricePerMeter(newPricePerMeter);

    const updatedRowValues = {
      ...rowPercentage,
    };

    Object.keys(updatedRowValues).forEach((key) => {
      updatedRowValues[key].value =
        (updatedRowValues[key].percentage * newSellPrice) / 100;
    });

    setRowPercentage(updatedRowValues);
  }

  const handleRowPercentageChange = (name, value) => {

    const updatePercentage = parseFloat(value) || 0;

    const updatedRowPercentage = {
      ...rowPercentage,
      [name]: {
        ...rowPercentage[name],
        percentage: updatePercentage,
      },
    };

    updateValues(updatedRowPercentage); 
  };

  useEffect(() => {
    let footage = 0;
    let cost = 0;
    let weight = 0;

    dataRows.forEach((row) => {
      footage += row.data[1] * row.data[5] * row.data[6];
      cost += footage * row.selectedLaje.price;
      weight = footage * row.selectedLaje.weight;
    });

    setTotalFootage(footage);
    setTotalCost(cost);
    setTotalWeight(weight);

    updateValues(rowPercentage)

    console.log(budgetHeader)
  }, [dataRows, rowPercentage]);

  return (
      <div className="calculo">
        <Sidebar />
        <div className="content">
          <Header pageTitle="Cálculo" userName="Bruno Hunoff" />
          <div className="tables-container">
            <div className="calculo-table">
              <h2 className="calculo-title-row">Contribuição</h2>
              <div className="calculo-table-content">
                <div className="total-row cost">
                  <span>Custo</span>
                  <span className="space"></span>
                  <span>{`R$${parseFloat(totalCost).toLocaleString('pt-BR', {minimumFractionDigits: 2})}`}</span>
                </div>
                <CalculoRow
                  rowName="Contribuição"
                  inputName="contribuicao"
                  onInputChange={handleRowPercentageChange}
                  rowPrice={rowPercentage.contribuicao.value.toFixed(2)}
                  rowPercentage={rowPercentage.contribuicao.percentage}
                />
                <CalculoRow
                  rowName="Comissão"
                  inputName="comissao"
                  onInputChange={handleRowPercentageChange}
                  rowPrice={rowPercentage.comissao.value.toFixed(2)}
                  rowPercentage={rowPercentage.comissao.percentage}
                />
                <CalculoRow
                  rowName="Admin"
                  inputName="admin"
                  onInputChange={handleRowPercentageChange}
                  rowPrice={rowPercentage.admin.value.toFixed(2)}
                  rowPercentage={rowPercentage.admin.percentage}
                />
                <CalculoRow
                  rowName="Tributário"
                  inputName="tributario"
                  onInputChange={handleRowPercentageChange}
                  rowPrice={rowPercentage.tributario.value.toFixed(2)}
                  rowPercentage={rowPercentage.tributario.percentage}
                />
                <CalculoRow
                  rowName="Extra"
                  inputName="extra"
                  onInputChange={handleRowPercentageChange}
                  rowPrice={rowPercentage.extra.value.toFixed(2)}
                  rowPercentage={rowPercentage.extra.percentage}
                />
                <div className="total-row">
                  <span>Total</span>
                  <span className="total-perc">{`${totalPercentage}%`}</span>
                  <span>{`R$${parseFloat(sellPrice).toLocaleString('pt-BR', {minimumFractionDigits: 2})}`}</span>
                </div>
              </div>
            </div>
            <div className="calculo-table">
              <h2 className="calculo-title-row">Resumo</h2>
              <div className="calculo-table-content">
                <ResumoRow
                  rowName="Área Total"
                  content={`${parseFloat(totalFootage).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}m²`}
                />
                <ResumoRow
                  rowName="RS/m²"
                  content={`R$${parseFloat(pricePerMeter).toLocaleString(
                    "pt-BR",
                    { minimumFractionDigits: 2 }
                  )}`}
                />
                <ResumoRow
                  rowName="Peso Total"
                  content={`${parseFloat(totalWeight).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}kg`}
                />
              </div>
            </div>
          </div>
          <NavRow showVoltar={true} />
        </div>
      </div>
  );
}

export default Calculo;
