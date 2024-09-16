import './clientes.css'
import Sidebar from '../../components/Sidebar/sidebar'
import Header from '../../components/Header/header'
import TableLajes from '../../components/TableLajes/tableLajes'

function Clientes() {

  return (
    <div className='home'>
      <Sidebar/>
      <div className='content'>
        <Header pageTitle= 'Clientes' userName= 'Bruno Hunoff' />
        <TableLajes filterName='Cliente' headerItens={['ID', 'Nome', 'Cidade/UF', 'CPF/CNPJ']}/>
      </div>
    </div>

  )
}

export default Clientes
