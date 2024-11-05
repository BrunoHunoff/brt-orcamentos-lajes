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
    const response = await apiLajes.put(`costumers/${id}`, {
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

    const editCostumer = response.data;

      setCostumers((prevCostumers) => 
        prevCostumers.map((costumer) =>
          costumer[0] == id
          ? [
            editCostumer.id,
            editCostumer.name,
            `${editCostumer.city}/${editCostumer.state}`,
            editCostumer.cnpjCpf
          ]
          : costumer
        )
      );
  }

  async function getCostumers() {
    const request = await apiLajes.get('/costumers');
    console.log(request)
    const formattedData = request.data

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

    console.log(costumers)

    const newCostumer = response.data;

    console.log(newCostumer)

      setCostumers(prevCostumers => [
        ...prevCostumers,
        newCostumer
      ]);
  }

  const deleteItem = (index) => {
    const costumerId = costumers[index].id;
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
                    onDelete={deleteItem}
                    isCostumer={true}/>
      </div>
    </div>
  );
}

export default Clientes;
