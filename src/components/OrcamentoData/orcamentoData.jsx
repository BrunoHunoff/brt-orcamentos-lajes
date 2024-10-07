import { useState } from 'react';
import IconBtn from '../IconBtn/iconBtn';
import Add from '../Icons/Add';
import NavRow from '../NavRow/navRow';
import OrcamentoDataHeader from '../OrcamentoDataHeader/orcamentoDataHedaer';
import OrcamentoDataTable from '../OrcamentoDataTable/orcamentoDataTable';
import './orcamentoData.css';

function OrcamentoData( ) {
    const [tables, setTables] = useState([{id:Date.now(), data:''}]);

    // Função para adicionar uma nova tabela
    const addTable = () => {
        const newTable = {id: Date.now(), data:''}
        setTables(prevTables => [...prevTables, newTable]); // Adiciona um novo item ao array
    };

    const deleteTable = (id) => {
        if(tables.length == 1) return // Não permite excluir todas as tabelasxq
        setTables(prevTables => prevTables.filter((table) => table.id !== id))
    }

    return (
        <div className='orcamentoData'>
            <OrcamentoDataHeader />
            {tables.map((table, index) => (
                <OrcamentoDataTable key={table.id} tableName={`Laje ${index+1}`} onDelete={() => deleteTable(table.id)}/> // Certifique-se de fornecer uma key única
            ))}
            <IconBtn onClick={addTable} btnName='Nova Seção' btnIcon={<Add />} />
        </div>
    );
}

export default OrcamentoData;
