import React, { useState, useEffect } from "react";
import "./orcamentoDataRow.css";
import DeleteIcon from "../Icons/DeleteIcon";

function OrcamentoDataRow({ items, classname, onDelete, lajes, updateDataRows, newSelectedLaje }) {
  const [data, setData] = useState(items.map(item => (item === "-" ? "" : item)));
  const [selectedLaje, setSelectedLaje] = useState(null);

  const handleChange = (index, value) => {
    const newData = [...data];
    newData[index] = value;

    if (index === 2) {
      const laje = lajes.find(laje => laje.name === value);
      console.log("LAJEEE")
      console.log(laje)
      setSelectedLaje(laje); // Atualiza selectedLaje com o laje selecionado
      updateDataRows({ id: items[0], data: newData, selectedLaje: laje });
    } else {
      // Aqui usamos o valor atualizado de selectedLaje diretamente na chamada de updateDataRows
      console.log("ssss")
      console.log(selectedLaje)
      updateDataRows({ id: items[0], data: newData, selectedLaje: selectedLaje });
    }

    setData(newData); // Atualiza o estado de data
  };

  useEffect(() => {
    console.log(items)
  }, [newSelectedLaje]);

  return (
    <div className={`row ${classname}`}>
      {items.map((item, index) => {
        const itemClass = index > 2 ? "item-2" : `item-${index + 1}`;

        if (index === 0) {
          return (
            <span key={index} className="item-id">
              {item}
            </span>
          );
        } else if (index === 2) {
          return (
            <div className="select-lajes-container" key={index}>
              <select
                id="clientes"
                className="lajes-select"
                value={data[index]}
                onChange={(e) => handleChange(index, e.target.value)}
              >
                <option value="" hidden>
                  -
                </option>
                {lajes.map((laje) => (
                  <option key={laje.id} value={laje.name}>
                    {laje.name}
                  </option>
                ))}
              </select>
            </div>
          );
        } else {
          return (
            <input
              key={index}
              className={itemClass}
              value={data[index]}
              placeholder={item}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          );
        }
      })}
      <button className="delete-btn">
        <DeleteIcon onClick={onDelete} width="24px" height="24px" />
      </button>
    </div>
  );
}

export default OrcamentoDataRow;
