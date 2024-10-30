import React, { useState } from "react";
import OrcamentoHeaderRow from "../OrcamentoHeaderRow/orcamentoHeaderRow";
import OrcamentoDataRow from "../OrcamentoDataRow/orcamentoDataRow";
import TableBtn from "../TableBtn/tableBtn";
import TitleRow from "../TitleRow/titleRow";
import "./orcamentoDataTable.css";
import "../IconBtn/iconBtn";

function OrcamentoDataTable({ onDelete, tableName, lajes, setLajes, dataRows, setDataRows, updateDataRows }) {
  const [mostrarItens, setMostrarItens] = useState(true);
  
  const headerItems = [
    "Item",
    "Quantidade",
    "Tipo",
    "Vão Max. (m)",
    "SCA (kg/m²)",
    "Larg. (m)",
    "Comp. (m)",
  ];

  const toggleMostrarItens = () => {
    setMostrarItens(!mostrarItens);
  };

  const adicionarNovoItem = () => {
    const newDataRow = {id: Date.now(), data: ["-", "-", "-", "-", "-", "-", "-"], selectedLaje: null};
    setDataRows((prevDataRows) => [...prevDataRows, newDataRow]);
  };

  const removerItem = (id) => {
    if (dataRows.length == 1) return;
    setDataRows((prevDataRows) => prevDataRows.filter((item) => item.id !== id));
  };

  console.log(dataRows)


  return (
    <div className="orcamentoDataTable">
      <TitleRow
        title={tableName}
        onToggle={toggleMostrarItens}
        onDelete={onDelete}
      />

      {mostrarItens && (
        <>
          <OrcamentoHeaderRow classname="header-row" items={headerItems} />
          {dataRows.map((dataRow, index) => {
            console.log(dataRow)
            const newDataRow = [...dataRow.data];
            const newSelectedLaje = [dataRow.selectedLaje]
            newDataRow[0] = String(index + 1);
            return (
              <OrcamentoDataRow
                lajes={lajes}
                setLajes={setLajes}
                key={dataRow.id}
                items={newDataRow}
                newSelectedLaje = {newSelectedLaje}
                showDelete={true}
                onDelete={() => removerItem(dataRow.id)}
                updateDataRows = {(newData) => updateDataRows(dataRow.id, newData)}
              />
            );
          })}

          <TableBtn
            id="novoItemBtn"
            btnName="Novo Item"
            onClick={adicionarNovoItem}
          />
        </>
      )}
    </div>
  );
}

export default OrcamentoDataTable;
