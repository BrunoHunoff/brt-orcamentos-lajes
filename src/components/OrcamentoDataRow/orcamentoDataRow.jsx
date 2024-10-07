import React, { useState } from "react";
import "./orcamentoDataRow.css";
import DeleteIcon from "../Icons/DeleteIcon";
import apiLajes from "../../../services/api";
import { useEffect } from "react";

function OrcamentoHeaderRow({ items, classname, onDelete }) {

  const [lajes, setLajes] = useState([])

  async function getLajes() {
    const response = (await apiLajes.get("/slabs"));
    setLajes(response.data)
  }

  useEffect(() => {
    getLajes();
  }, []);

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
        } else if (index ==2){
          return (
            <div className="select-lajes-container" key={index}>
              <select id="clientes" className="lajes-select">
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
          return <input key={index} className={itemClass} placeholder={item} />;
        }
      })}

      <button className="delete-btn">
        <DeleteIcon onClick={onDelete} width="24px" height="24px" />
      </button>
    </div>
  );
}

export default OrcamentoHeaderRow;
