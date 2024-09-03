import './index.css'
import Sidebar from '../../components/Sidebar/sidebar'
import Header from '../../components/Header/header'

function Home() {

  return (
    <div className='home'>
      <Sidebar/>
      <Header pageTitle= 'Home' userName= 'Bruno Hunoff' />
    </div>

  )
}

export default Home
