import React from 'react';
import './orcamentoDataRow.css';
import DeleteIcon from '../Icons/DeleteIcon';


function OrcamentoHeaderRow({ items, classname, onDelete }) {
  return (
    <div className= {`row ${classname}`}>
        
      {items.map((item, index) => {
        const itemIndex = index + 1;
        let itemClass;

        if (itemIndex > 3) {
          itemClass = 'item-2';
        } else {
          itemClass = `item-${itemIndex}`;
        }

        return index === 0 ? (
          <span key={index} className='item-id'>
            {item}
          </span>
        ) : (
          <input key={index} className={itemClass} placeholder={item} />
        );
      })}

      <button className='delete-btn'>
        <DeleteIcon onClick={onDelete} width='24px' height='24px'/>
      </button>

    </div>
  );
}

export default OrcamentoHeaderRow;
