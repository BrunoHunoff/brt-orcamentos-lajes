import React, { useState } from 'react';
import OrcamentoDataRow from "../HeaderRow/orcamentoDataRow";
import TableBtn from "../TableBtn/tableBtn";
import TitleRow from "../TitleRow/titleRow";
import './orcamentoDataTable.css';
import '../IconBtn/iconBtn';

function OrcamentoDataTable() {
    const [mostrarItens, setMostrarItens] = useState(true);  // Estado para controlar a visibilidade
    const [itens, setItens] = useState([ // Estado para armazenar as linhas da tabela
        ['0', '10', 'LP21 CL01', '10', '500', '1,25', '9,90'],
        ['0', '1', 'LP21 CL01', '10', '500', '1,25', '9,75'],
        ['0', '10', 'LP21 CL07', '10', '500', '1,25', '12,90'],
        ['0', '8', 'LP21 CL01', '10', '500', '1,25', '10'],
    ]);

    const headerItems = ['Item', 'Quantidade', 'Tipo', 'Vão Max. (m)', 'SCA (kg/m²)', 'Larg. (m)', 'Comp. (m)'];

    // Função para alternar a visibilidade dos itens
    const toggleMostrarItens = () => {
        setMostrarItens(!mostrarItens);
    };

    // Função para adicionar uma nova linha
    const adicionarNovoItem = () => {
        const novoItem = ['-', '-', 'Tipo', '-', '-', '-', '-'];  // Exemplo de valores padrões
        setItens(prevItens => [...prevItens, novoItem]); // Atualiza o estado com a nova linha
    };

    // Função para remover linha
    const removerItem = (index) => {
        setItens(prevItens => prevItens.filter((_, i) => i !== index)); // Remove o item do estado
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
                        const newItem = [...item]; // Cria uma cópia do array para evitar mutações
                        newItem[0] = String(index + 1); // Atualiza o índice da linha
                        return <OrcamentoDataRow key={index} items={newItem} showDelete={true} onDelete={() => removerItem(index)}/>;
                    })}
                    {/* Componente de botão para adicionar um novo item */}
                    <TableBtn id='novoItemBtn' btnName="Novo Item" onClick={adicionarNovoItem} />
                </>
            )}
        </div>
    );
}

export default OrcamentoDataTable;
