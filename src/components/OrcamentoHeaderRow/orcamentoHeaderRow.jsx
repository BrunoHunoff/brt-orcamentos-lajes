import React from 'react';
import './orcamentoHeaderRow.css';


function OrcamentoHeaderRow({ items, classname }) {
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

        return (
          <span key={index} className={itemClass}>
            {item}
          </span>
        );
      })}

    </div>
  );
}

export default OrcamentoHeaderRow;
