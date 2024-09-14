import { useState } from 'react';
import IconBtn from '../IconBtn/iconBtn';
import Add from '../Icons/Add';
import NavRow from '../NavRow/navRow';
import OrcamentoDataHeader from '../OrcamentoDataHeader/orcamentoDataHedaer';
import OrcamentoDataTable from '../OrcamentoDataTable/orcamentoDataTable';
import './orcamentoData.css';

function OrcamentoData( ) {
    const [tables, setTables] = useState(['']);

    // Função para adicionar uma nova tabela
    const addTable = () => {
        setTables(prevTables => [...prevTables, {}]); // Adiciona um novo item ao array
    };

    const deleteTable = (index) => {
        if(tables.length == 1) return // Não permite excluir todas as tabelas
        setTables(prevTables => prevTables.filter((_, i) => i !== index))
    }

    return (
        <div className='orcamentoData'>
            <OrcamentoDataHeader />
            {tables.map((table, index) => (
                <OrcamentoDataTable key={index} onDelete={() => deleteTable(index)}/> // Certifique-se de fornecer uma key única
            ))}
            <IconBtn onClick={addTable} btnName='Nova Seção' btnIcon={<Add />} />
        </div>
    );
}

export default OrcamentoData;
