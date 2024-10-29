import { createContext, useState } from "react";

export const OrcamentoContext = createContext();

export const OrcamentoProvider = ({ children }) => {
  const initialDataRows = [
    {
      id: Date.now(),
      data: ["-", "-", "-", "-", "-", "-", "-"],
      selectedLaje: null,
    },
  ];
  
  const initialBudgetHeader = {
    budgetId: null,
    clientName: null,
    clientId: null,
    city: null,
    state: null,
    freightType: null,
    freightPrice: null,
    freightWeight: null,
  };
  
  const initialRowPercentage = {
    contribuicao: { percentage: 0, value: 0 },
    comissao: { percentage: 0, value: 0 },
    admin: { percentage: 0, value: 0 },
    tributario: { percentage: 0, value: 0 },
    extra: { percentage: 0, value: 0 },
  };

  const [dataRows, setDataRows] = useState(initialDataRows);
  const [totalFootage, setTotalFootage] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);
  const [pricePerMeter, setPricePerMeter] = useState(0);
  const [budgetHeader, setBudgetHeader] = useState(initialBudgetHeader);
  const [totalPercentage, setTotalPercentage] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);
  const [rowPercentage, setRowPercentage] = useState(initialRowPercentage);

  const resetState = () => {
    setDataRows(initialDataRows);
    setTotalFootage(0);
    setTotalCost(0);
    setTotalWeight(0);
    setPricePerMeter(0);
    setBudgetHeader(initialBudgetHeader);
    setTotalPercentage(0);
    setSellPrice(0);
    setRowPercentage(initialRowPercentage);
  };

  return (
    <OrcamentoContext.Provider
      value={{
        dataRows,
        setDataRows,
        budgetHeader,
        setBudgetHeader,
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
        setPricePerMeter,
        resetState
      }}
    >
      {children}
    </OrcamentoContext.Provider>
  );
};
