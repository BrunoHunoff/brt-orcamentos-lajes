import './calculo.css'

import Header from "../../components/Header/header"
import Sidebar from "../../components/Sidebar/sidebar"
import CalculoTable from '../../components/CalculoTable/calculoTable'
import ResumoTable from '../../components/ResumoTable/resumoTable'
import NavRow from '../../components/NavRow/navRow'

function Calculo( { dataRows, lajes } ) {
    let footage = 0
    let cost = 0

    dataRows.forEach(row => {
        footage += (row.data[1] * row.data[5] * row.data[6]);
        cost += (footage)
    });

    return (
        <div className="calculo">
            <Sidebar/>

            <div className="content">
                <Header pageTitle = 'Calculo' userName = 'Bruno Hunoff' />
                <div className='tables-container'>
                    <CalculoTable/>
                    <ResumoTable/>
                </div>
                <NavRow showVoltar={true}/>
            </div>
        </div>
    )
}

export default Calculo