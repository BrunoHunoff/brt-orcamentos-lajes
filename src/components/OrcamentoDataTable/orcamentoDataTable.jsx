import React, { useState } from "react";
import OrcamentoHeaderRow from "../OrcamentoHeaderRow/orcamentoHeaderRow";
import OrcamentoDataRow from "../OrcamentoDataRow/orcamentoDataRow";
import TableBtn from "../TableBtn/tableBtn";
import TitleRow from "../TitleRow/titleRow";
import "./orcamentoDataTable.css";
import "../IconBtn/iconBtn";

function OrcamentoDataTable({ onDelete }) {
  const [mostrarItens, setMostrarItens] = useState(true);
  const [itens, setItens] = useState([{id: Date.now(), data: ["-", "-", "-", "-", "-", "-", "-"]}]);

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
    const novoItem = {id: Date.now(), data: ["-", "-", "-", "-", "-", "-", "-"]};
    setItens((prevItens) => [...prevItens, novoItem]);
  };

  const removerItem = (id) => {
    if (itens.length == 1) return;
    setItens((prevItens) => prevItens.filter((item) => item.id !== id));
  };

  return (
    <div className="orcamentoDataTable">
      <TitleRow
        title="Laje 01"
        onToggle={toggleMostrarItens}
        onDelete={onDelete}
      />

      {mostrarItens && (
        <>
          <OrcamentoHeaderRow classname="header-row" items={headerItems} />
          {itens.map((item, index) => {
            const newItem = [...item.data];
            newItem[0] = String(index + 1);
            return (
              <OrcamentoDataRow
                key={item.id}
                items={newItem}
                showDelete={true}
                onDelete={() => removerItem(item.id)}
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
