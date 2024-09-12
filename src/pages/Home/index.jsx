import './index.css'
import Sidebar from '../../components/Sidebar/sidebar'
import Header from '../../components/Header/header'
import TableLajes from '../../components/TableLajes/tableLajes'

function Home() {

  return (
    <div className='home'>
      <Sidebar/>
      <div className='content'>
        <Header pageTitle= 'Home' userName= 'Bruno Hunoff' />
        <TableLajes/>
      </div>
    </div>

  )
}

export default Home
