import './orcamento.css'
import Sidebar from '../../components/Sidebar/sidebar'
import Header from '../../components/Header/header'
import OrcamentoData from '../../components/OrcamentoData/orcamentoData'

function Orcamento() {


    return (
        <div className="orcamento">
            <Sidebar/>
            <Header pageTitle = 'Orçamento' userName = 'Bruno Hunoff'/>
            <OrcamentoData/>
        </div>
    )
}

export default Orcamento