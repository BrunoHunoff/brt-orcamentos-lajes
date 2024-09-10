// HeaderRow.js
import React from 'react';
import './orcamentoDataRow.css';
import DeleteIcon from '../Icons/DeleteIcon';


function OrcamentoDataRow({ items, showDelete, classname }) {
  return (
    <div className= {`row ${classname}`}>
        
      {items.map((item, index) => {
        const itemIndex = index + 1;
        let itemClass;

        if (itemIndex > 3) {
          itemClass = 'item-2'; // ou a classe CSS que você deseja aplicar
        } else {
          itemClass = `item-${itemIndex}`;
        }

        return (
          <span key={index} className={itemClass}>
            {item}
          </span>
        );
      })}

      {showDelete && <button className='delete-btn'>
        <DeleteIcon width='24px' height='24px'/>
      </button>}

    </div>
  );
}

export default OrcamentoDataRow;
