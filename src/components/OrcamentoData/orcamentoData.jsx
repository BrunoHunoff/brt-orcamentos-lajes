import OrcamentoDataHeader from '../OrcamentoDataHeader/orcamentoDataHedaer'
import OrcamentoDataTable from '../OrcamentoDataTable/orcamentoDataTable'
import './orcamentoData.css'

function OrcamentoData() {
    return (
        <div className='orcamentoData'>
            <OrcamentoDataHeader/>
            <OrcamentoDataTable/>
        </div>
    )
}

export default OrcamentoData