import './clientes.css'
import Sidebar from '../../components/Sidebar/sidebar'
import Header from '../../components/Header/header'
import TableLajes from '../../components/TableLajes/tableLajes'
import ClientModal from '../../components/ClientModal/clientModal'
import { useState } from 'react'; // Certifique-se de importar o useState

function Clientes() {
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
        <TableLajes onButtonClick={openModal} filterName='Cliente' headerItens={['ID', 'Nome', 'Cidade/UF', 'CPF/CNPJ']} />
      </div>
    </div>
  );
}

export default Clientes;
