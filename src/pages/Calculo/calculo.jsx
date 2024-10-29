import "./calculo.css";
import { useEffect, useState } from "react";
import Header from "../../components/Header/header";
import Sidebar from "../../components/Sidebar/sidebar";
import NavRow from "../../components/NavRow/navRow";
import CalculoRow from "../../components/CalculoRow/calculoRow";
import ResumoRow from "../../components/ResumoRow/resumoRow";
import { useContext } from "react";
import { OrcamentoContext } from "../../contexts/OrcamentoContext";
import apiLajes from "../../../services/api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Calculo({}) {
  const {
    budgetHeader,
    setBudgetHeader,
    dataRows,
    rowPercentage,
    setRowPercentage,
    totalPercentage,
    setTotalPercentage,
    sellPrice,
    setSellPrice,
    totalFootage,
    setTotalFootage,
    totalCost,
    setTotalCost,
    totalWeight,
    setTotalWeight,
    pricePerMeter,
    setPricePerMeter
  } = useContext(OrcamentoContext);

  

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

  const updateFreightWeight = (e) => {
    const value = e.target.value
    setBudgetHeader((prevBudgetHeader) => ({
      ...prevBudgetHeader,
      freightWeight: value,
    }));
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

    console.log(budgetHeader);
  }, [dataRows, rowPercentage]);

  const orcamentoData = {
    costumerId: parseInt(budgetHeader.clientId),
    costumerName: budgetHeader.clientName,
    footage: parseFloat(totalFootage),
    totalWeight: parseFloat(totalWeight),
    cost: parseFloat(totalCost),
    sellPrice: parseFloat(sellPrice),
    city: budgetHeader.city,
    state: budgetHeader.state,
    freightWeight: parseFloat(budgetHeader.freightWeight),
    freightType: budgetHeader.freightType,
    freightPrice: () => {
      if (budgetHeader.freightPrice == undefined || budgetHeader.freightPrice == null) return 0
      parseFloat(budgetHeader.freightPrice)
    },
    administration: parseFloat(rowPercentage.admin.percentage),
    profit: parseFloat(rowPercentage.contribuicao.percentage),
    taxes: parseFloat(rowPercentage.tributario.percentage),
    extra: parseFloat(rowPercentage.extra.percentage),
    slabs: dataRows.map((row) => ({
        slabId: parseInt(row.selectedLaje.id), 
        budgetId: parseInt(0),
        slabsNumber: parseInt(row.data[0]), 
        overload: parseFloat(row.data[3]),
        length: parseFloat(row.data[4]),
        width: parseFloat(row.data[5]), 
    }))
  };

  const navigate = useNavigate();

  async function salvarOrcamento(data) {
    try {
      let response;
  
      if (budgetHeader.budgetId != null && budgetHeader.budgetId != 0) {
        response = await apiLajes.put(`/budgets/${budgetHeader.budgetId}`, data);
        console.log(response);
      } else {
        response = await apiLajes.post("/budgets", data);
        budgetHeader.budgetId = response.data.id
        console.log("POST")
      }
  
      if (response.status === 200) {
        Swal.fire({
          title: "Sucesso!",
          text: response.config.method=="put" ? "Orçamento atualizado" : "Orçamento salvo",
          icon: "success",
          customClass: "error-modal"
        });

        navigate("/proposta")
        
      } else {
        throw new Error("Erro ao salvar orçamento. Status: " + response.status);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      Swal.fire({
        title: "Erro ao salvar orçamento",
        text: "Entre em contato com o suporte",
        icon: "error",
        customClass: "error-modal"
      });
    }
  }
  

  return (
    <div className="calculo">
      <Sidebar />
      <div className="content">
        <Header pageTitle="Cálculo" userName="Bruno Hunoff" />
        <div className="tables-container">
          <div className="calculo-table">
            <h2 className="calculo-title-row">Percentuais</h2>
            <div className="calculo-table-content">
              <div className="total-row cost">
                <span>Custo</span>
                <span className="space"></span>
                <span>{`R$${parseFloat(totalCost).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}`}</span>
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
                <span>{`R$${parseFloat(sellPrice).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}`}</span>
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
              <ResumoRow
                rowName="Nº Fretes"
                content={`${parseFloat(totalWeight).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}kg`}
              />
              <div className="resumo-row">
                <span>Kg/Frete</span>
                <input
                  defaultValue={budgetHeader.freightWeight}
                  onBlur={updateFreightWeight}
                />
              </div>
              <ResumoRow
                rowName="Total Fretes"
                content={`${parseFloat(totalWeight).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}kg`}
              />
            </div>
          </div>
        </div>
        <NavRow showVoltar={true} showSalvar={true} onNext={() => salvarOrcamento(orcamentoData)}/>
      </div>
    </div>
  );
}

export default Calculo;
