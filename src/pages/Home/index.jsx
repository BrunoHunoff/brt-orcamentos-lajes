import { useState, useEffect } from "react";
import './index.css'
import Sidebar from '../../components/Sidebar/sidebar'
import Header from '../../components/Header/header'
import TableLajes from '../../components/TableLajes/tableLajes'
import apiLajes from "../../../services/api";

function Home() {
  const [budgets, setBudgets] = useState([]);

  async function getBudgets() {
    const request = await apiLajes.get('/budgets');
    const formattedData = request.data.map(budget => [
      budget.id,                 // Primeiro valor (ID)
      budget.costumerName,       // Segundo valor (Nome do cliente)
      budget.footage,            // Terceiro valor (Área)
      `${budget.city}/${budget.state}`  // Quarto valor (Cidade/Estado)
    ]);
    setBudgets(formattedData);
  }

  useEffect(() => {
    getBudgets();
  }, []);

  return (
    <div className='home'>
      <Sidebar/>
      <div className='content'>
        <Header pageTitle='Home' userName='Bruno Hunoff' />
        <TableLajes
          filterName='Orçamento'
          headerItens={['ID', 'Cliente', 'm²', 'Cidade/UF']}
          data={budgets} // Passar os dados como props
        />
      </div>
    </div>
  );
}

export default Home;
