import './index.css'
import Sidebar from '../../components/Sidebar/sidebar'
import Header from '../../components/Header/header'
import TableFilter from '../../components/TableFilter/tableFilter'

function Home() {

  return (
    <div className='home'>
      <Sidebar/>
      <Header pageTitle= 'Home' userName= 'Bruno Hunoff' />
      <TableFilter filterName= 'Orçamento'/>
    </div>

  )
}

export default Home
