import './clientes.css'
import Sidebar from '../../components/Sidebar/sidebar'
import Header from '../../components/Header/header'
import TableLajes from '../../components/TableLajes/tableLajes'
import ClientModal from '../../components/ClientModal/clientModal'
import apiLajes from '../../../services/api'
import { useState, useEffect } from 'react';

function Clientes() {

  const [costumers, setCostumers] = useState([]);

  async function getCostumers() {
    const request = await apiLajes.get('/costumers');
    const formattedData = request.data.map(costumer => [
      costumer.id,
      costumer.name,
      `${costumer.city}/${costumer.state}`,
      costumer.cnpjCpf
  ]);

  setCostumers(formattedData);
  }

  async function deleteCostumer(id) {
    await apiLajes.delete(`/costumers/${id}`);
  }

  async function addCostumer(data) {
    console.log(data)
    const response = await apiLajes.post('/costumers', {
      name: data[0],
      pj:data[1],
      cnpjCpf:data[2],
      cep:data[3],
      city:data[4],
      state:data[5],
      address:data[6],
      addressNumber: data[7],
      email:data[8],
      phoneNumber:data[9]
    }
    )
    const newCostumer = response.data;

      // Atualiza o estado com o novo cliente
      setCostumers(prevCostumers => [
        ...prevCostumers,
        [newCostumer.id, newCostumer.name, `${newCostumer.city}/${newCostumer.state}`, newCostumer.cnpjCpf]
      ]);
  }

  const deleteItem = (index) => {
    const costumerId = costumers[index][0];
    deleteCostumer(costumerId);
    setCostumers(prevCostumers => prevCostumers.filter((_, i) => i !== index));
  };

  useEffect(() => {
    getCostumers();
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className='home'>
      <Sidebar />
      <div className='content'>
        <ClientModal isOpen={isModalOpen} onClose={closeModal} onAdd={addCostumer}/>
        <Header pageTitle='Clientes' userName='Bruno Hunoff' />
        <TableLajes onButtonClick={openModal}
                    filterName='Cliente'
                    headerItens={['ID', 'Nome', 'Cidade/UF', 'CPF/CNPJ']}
                    data={costumers}
                    onDelete={deleteItem}/>
      </div>
    </div>
  );
}

export default Clientes;
