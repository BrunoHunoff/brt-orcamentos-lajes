import React, { useState, useEffect } from "react";
import "./orcamentoDataRow.css";
import DeleteIcon from "../Icons/DeleteIcon";

function OrcamentoDataRow({ items, classname, onDelete, lajes, setLajes, updateDataRows }) {
  const [data, setData] = useState(items.map(item => item === "-" ? "" : item));
  const [selectedLaje, setSelectedLaje] = useState(null);

  const handleChange = (index, value) => {
    const newData = [...data];
    newData[index] = value;
    setData(newData);

    if (index === 2) {
      const laje = lajes.find(laje => laje.name === value);
      setSelectedLaje(laje); 
      updateDataRows({ id: items[0], data: newData, selectedLaje: laje }); //alteração de selectedLaje
    } else {
      updateDataRows({ id: items[0], data: newData, selectedLaje }); //mantém selected laje atual
    }
  };

  return (
    <div className={`row ${classname}`}>
      {items.map((item, index) => {
        const itemIndex = index + 1;
        let itemClass;

        if (itemIndex > 3) {
          itemClass = "item-2";
        } else {
          itemClass = `item-${itemIndex}`;
        }

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
                <option value='' hidden>-</option>
                {lajes.map((laje, idx) => (
                  <option key={idx} value={laje.name}>
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
        <DeleteIcon onClick={() => onDelete()} width="24px" height="24px" />
      </button>
    </div>
  );
}

export default OrcamentoDataRow;
