import './clientes.css'
import Sidebar from '../../components/Sidebar/sidebar'
import Header from '../../components/Header/header'
import TableLajes from '../../components/TableLajes/tableLajes'
import ClientModal from '../../components/ClientModal/clientModal'
import apiLajes from '../../../services/api'
import { useState, useEffect } from 'react';

function Clientes() {

  const [modalData, setModalData] = useState(null);
  const [costumers, setCostumers] = useState([]);

  async function modalEditCostumer(id) {
    const request = await apiLajes.get(`costumers/${id}`);
    const costumerData =  [
      request.data.id,
      request.data.name,
      request.data.pj,
      request.data.cnpjCpf,
      request.data.cep,
      request.data.city,
      request.data.state,
      request.data.address,
      request.data.addressNumber,
      request.data.email,
      request.data.phoneNumber,
    ];
    setModalData(costumerData);
    setModalOpen(true);

  }

  async function editCostumer(id, data) {
    apiLajes.put(`costumers/${id}`, {
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
    })
  }

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
        <ClientModal isOpen={isModalOpen} data={modalData} onClose={closeModal} onEdit={editCostumer} onAdd={addCostumer}/>
        <Header pageTitle='Clientes' userName='Bruno Hunoff' />
        <TableLajes onButtonClick={openModal}
                    onEditClick={modalEditCostumer}
                    filterName='Cliente'
                    headerItens={['ID', 'Nome', 'Cidade/UF', 'CPF/CNPJ']}
                    data={costumers}
                    onDelete={deleteItem}/>
      </div>
    </div>
  );
}

export default Clientes;
