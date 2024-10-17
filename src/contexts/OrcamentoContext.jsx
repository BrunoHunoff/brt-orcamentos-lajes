import { createContext, useState } from "react";

export const OrcamentoContext = createContext()

export const OrcamentoProvider = ({children}) => {
    const [dataRows, setDataRows] = useState([
        { id: Date.now(),
          data: ["-", "-", "-", "-", "-", "-", "-"],
          selectedLaje: null },
      ]);
    
      const [budgetHeader, setBudgetHeader] = useState({
        budgetId: null,
        clientName: null,
        clientId: null,
        city: null,
        state: null,
        freightType: null,
        freightPrice: null
      })

    return(
        <OrcamentoContext.Provider value={ {dataRows, setDataRows, budgetHeader, setBudgetHeader} }>
            {children}
        </OrcamentoContext.Provider>
    )
}