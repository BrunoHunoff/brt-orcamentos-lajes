import './clientes.css'
import Sidebar from '../../components/Sidebar/sidebar'
import Header from '../../components/Header/header'
import TableLajes from '../../components/TableLajes/tableLajes'
import ClientModal from '../../components/ClientModal/clientModal'
import apiLajes from '../../../services/api'
import { useState, useEffect } from 'react'; // Certifique-se de importar o useState

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
        <ClientModal isOpen={isModalOpen} onClose={closeModal} />
        <Header pageTitle='Clientes' userName='Bruno Hunoff' />
        {/* Passando a função openModal como prop para TableLajes */}
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
