import IconBtn from '../IconBtn/iconBtn'
import Add from '../Icons/Add'
import NavRow from '../NavRow/navRow'
import OrcamentoDataHeader from '../OrcamentoDataHeader/orcamentoDataHedaer'
import OrcamentoDataTable from '../OrcamentoDataTable/orcamentoDataTable'
import './orcamentoData.css'

function OrcamentoData() {
    return (
        <div className='orcamentoData'>
            <OrcamentoDataHeader/>
            <OrcamentoDataTable/>
            <IconBtn btnName='Nova Seção' btnIcon={<Add/>}/>
            <NavRow/>
        </div>
    )
}

export default OrcamentoData