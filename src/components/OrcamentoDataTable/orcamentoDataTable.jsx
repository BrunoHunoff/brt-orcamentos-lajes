import HeaderRow from "../HeaderRow/headerRow"
import TitleRow from "../TitleRow/titleRow"
import './orcamentoDataTable.css'

function OrcamentoDataTable() {
    return(
        <div className="orcamentoDataTable">
            <TitleRow title='Laje 01'/>
            <HeaderRow/>
        </div>
    )
}

export default OrcamentoDataTable