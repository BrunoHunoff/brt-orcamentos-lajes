import './orcamento.css'
import Sidebar from '../../components/Sidebar/sidebar'
import Header from '../../components/Header/header'
import OrcamentoData from '../../components/OrcamentoData/orcamentoData'

function Orcamento() {


    return (
        <div className="orcamento">
            <Sidebar/>

            <div className='content'>
                <Header pageTitle = 'Orçamento' userName = 'Bruno Hunoff'/>
                <OrcamentoData/>
            </div>
        </div>
    )
}

export default Orcamento