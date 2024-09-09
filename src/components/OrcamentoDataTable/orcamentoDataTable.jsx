import OrcamentoDataRow from "../HeaderRow/orcamentoDataRow"
import TitleRow from "../TitleRow/titleRow"
import './orcamentoDataTable.css'

function OrcamentoDataTable() {
    const headerItems = ['Item',
                                'Quantidade', 
                                'Tipo', 
                                'Vão Max. (m)', 
                                'SCA (kg/m²)', 
                                'Larg. (m)', 
                                'Comp. (m)']

    const itens = [
        ['0','10', 'LP21 CL01', '10', '500', '1,25', '9,90'],
        ['0','1', 'LP21 CL01', '10', '500', '1,25', '9,75'],
        ['0','10', 'LP21 CL07', '10', '500', '1,25', '12,90'],
        ['0','8', 'LP21 CL01', '10', '500', '1,25', '10'],
]

    return(
        <div className="orcamentoDataTable">
            <TitleRow title='Laje 01'/>
            <OrcamentoDataRow classname='header-row' items = {headerItems}/>

            {itens.map((item, index)=> {

                const newItem = item
                newItem[0] = String(index+1)
                return(
                <OrcamentoDataRow key={index} items={item} showDelete={true}/>
            )
            })}

        </div>
    )
}

export default OrcamentoDataTable