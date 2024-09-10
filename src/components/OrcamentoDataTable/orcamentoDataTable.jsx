import React, { useState } from 'react';
import OrcamentoDataRow from "../HeaderRow/orcamentoDataRow";
import TableBtn from "../TableBtn/tableBtn";
import TitleRow from "../TitleRow/titleRow";
import './orcamentoDataTable.css';
import '../IconBtn/iconBtn';

function OrcamentoDataTable() {
    const [mostrarItens, setMostrarItens] = useState(true);  // Estado para controlar a visibilidade

    const headerItems = ['Item', 'Quantidade', 'Tipo', 'Vão Max. (m)', 'SCA (kg/m²)', 'Larg. (m)', 'Comp. (m)'];

    const itens = [
        ['0', '10', 'LP21 CL01', '10', '500', '1,25', '9,90'],
        ['0', '1', 'LP21 CL01', '10', '500', '1,25', '9,75'],
        ['0', '10', 'LP21 CL07', '10', '500', '1,25', '12,90'],
        ['0', '8', 'LP21 CL01', '10', '500', '1,25', '10'],
    ];

    // Função para alternar a visibilidade dos itens
    const toggleMostrarItens = () => {
        setMostrarItens(!mostrarItens);
    };

    return (
        <div className="orcamentoDataTable">
            {/* Passando a função para o TitleRow */}
            <TitleRow title="Laje 01" onToggle={toggleMostrarItens} />

            {/* Renderiza as linhas da tabela se o estado mostrarItens for verdadeiro */}
            {mostrarItens && (
                <>
                    <OrcamentoDataRow classname="header-row" items={headerItems} />
                    {itens.map((item, index) => {
                        const newItem = item;
                        newItem[0] = String(index + 1);
                        return <OrcamentoDataRow key={index} items={item} showDelete={true} />;
                    })}
                    <TableBtn btnName="Novo Item" />
                </>
            )}

        </div>
    );
}

export default OrcamentoDataTable;
