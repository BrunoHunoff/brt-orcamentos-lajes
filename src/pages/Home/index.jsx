import { useState, useEffect } from "react";
import './index.css'
import Sidebar from '../../components/Sidebar/sidebar'
import Header from '../../components/Header/header'
import TableLajes from '../../components/TableLajes/tableLajes'
import { useApiLajes } from '../../../services/api';

function Home() {
  const [budgets, setBudgets] = useState([]);
  const apiLajes = useApiLajes();

  async function getBudgets() {
    const request = await apiLajes.get('/budgets');

    
    const formattedData = request.data;

    setBudgets(formattedData);
  }

  async function deleteBudget(id) {
    await apiLajes.delete(`/budgets/${id}`);
  }

  const deleteIten = (index) => {
    const budgetId = budgets[index].id;
    deleteBudget(budgetId);
    setBudgets(prevBudgets => prevBudgets.filter((_, i) => i !== index));
  };

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
          data={budgets}
          onDelete={deleteIten}
        />
      </div>
    </div>
  );
}

export default Home;
