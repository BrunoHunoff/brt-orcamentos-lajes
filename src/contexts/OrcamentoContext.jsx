import { createContext, useState } from "react";

export const OrcamentoContext = createContext();

export const OrcamentoProvider = ({ children }) => {
  const [dataRows, setDataRows] = useState([
    {
      id: Date.now(),
      data: ["-", "-", "-", "-", "-", "-", "-"],
      selectedLaje: null,
    },
  ]);

  const [budgetHeader, setBudgetHeader] = useState({
    budgetId: null,
    clientName: null,
    clientId: null,
    city: null,
    state: null,
    freightType: null,
    freightPrice: null,
    freightWeight: null
  });

  const [totalPercentage, setTotalPercentage] = useState(0);

  const [sellPrice, setSellPrice] = useState(0);

  const [rowPercentage, setRowPercentage] = useState({
    contribuicao: {
      percentage: 0,
      value: 0,
    },
    comissao: {
      percentage: 0,
      value: 0,
    },
    admin: {
      percentage: 0,
      value: 0,
    },
    tributario: {
      percentage: 0,
      value: 0,
    },
    extra: {
      percentage: 0,
      value: 0,
    },
  });

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
        setSellPrice
      }}
    >
      {children}
    </OrcamentoContext.Provider>
  );
};
