import React, { useState } from 'react';
import OrcamentoHeaderRow from "../OrcamentoHeaderRow/orcamentoHeaderRow";
import OrcamentoDataRow from '../OrcamentoDataRow/orcamentoDataRow';
import TableBtn from "../TableBtn/tableBtn";
import TitleRow from "../TitleRow/titleRow";
import './orcamentoDataTable.css';
import '../IconBtn/iconBtn';

function OrcamentoDataTable( { onDelete }) {
    const [mostrarItens, setMostrarItens] = useState(true); 
    const [itens, setItens] = useState([ 
        ['-', '-', '-', '-', '-', '-', '-'],
    ]);

    const headerItems = ['Item', 'Quantidade', 'Tipo', 'Vão Max. (m)', 'SCA (kg/m²)', 'Larg. (m)', 'Comp. (m)'];

    const toggleMostrarItens = () => {
        setMostrarItens(!mostrarItens);
    };

    const adicionarNovoItem = () => {
        const novoItem = ['-', '-', '-', '-', '-', '-', '-']; 
        setItens(prevItens => [...prevItens, novoItem]);
    };

    const removerItem = (index) => {

        if(itens.length == 1) return
        setItens(prevItens => prevItens.filter((_, i) => i !== index));
    };


    return (
        <div className="orcamentoDataTable">

            <TitleRow title="Laje 01" onToggle={toggleMostrarItens} onDelete={onDelete} />


            {mostrarItens && (
                <>
                    <OrcamentoHeaderRow classname="header-row" items={headerItems} />
                    {itens.map((item, index) => {
                        const newItem = [...item]; 
                        newItem[0] = String(index + 1);
                        return <OrcamentoDataRow key={index} items={newItem} showDelete={true} onDelete={() => removerItem(index)}/>;
                    })}

                    <TableBtn id='novoItemBtn' btnName="Novo Item" onClick={adicionarNovoItem} />
                </>
            )}
        </div>
    );
}

export default OrcamentoDataTable;
