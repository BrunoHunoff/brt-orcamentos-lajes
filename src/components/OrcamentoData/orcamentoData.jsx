import { useState } from "react";
import IconBtn from "../IconBtn/iconBtn";
import Add from "../Icons/Add";
import OrcamentoDataHeader from "../OrcamentoDataHeader/orcamentoDataHedaer";
import OrcamentoDataTable from "../OrcamentoDataTable/orcamentoDataTable";
import "./orcamentoData.css";

function OrcamentoData({ lajes, setLajes, dataRows, setDataRows }) {
  const [tables, setTables] = useState([{ id: Date.now(), data: "" }]);

  const addTable = () => {
    const newTable = { id: Date.now(), data: "" };
    setTables((prevTables) => [...prevTables, newTable]);
  };

  const deleteTable = (id) => {
    if (tables.length == 1) return;
    setTables((prevTables) => prevTables.filter((table) => table.id !== id));
  };

  return (
    <div className="orcamentoData">
      <OrcamentoDataHeader />
      {tables.map((table, index) => (
        <OrcamentoDataTable
          lajes={lajes}
          setLajes={setLajes}
          key={table.id}
          tableName={`Laje ${index + 1}`}
          onDelete={() => deleteTable(table.id)}
          dataRows={dataRows}
          setDataRows={setDataRows}
        />
      ))}
      <IconBtn onClick={addTable} btnName="Nova Seção" btnIcon={<Add />} />
    </div>
  );
}

export default OrcamentoData;
