import './orcamento.css'
import Sidebar from '../../components/Sidebar/sidebar'
import Header from '../../components/Header/header'
import OrcamentoData from '../../components/OrcamentoData/orcamentoData'
import NavRow from '../../components/NavRow/navRow'
import apiLajes from '../../../services/api'
import { useState, useEffect } from 'react'

function Orcamento() {

    const [lajes, setLajes] = useState([])
    const [dataRows, setDataRows] = useState([{id: Date.now(), data: ["-", "-", "-", "-", "-", "-", "-"]}]);

    async function getLajes() {
        const response = (await apiLajes.get("/slabs"));
        setLajes(response.data)
      }
    
      useEffect(() => {
        getLajes();
      }, []);

      
    return (
        <div className="orcamento">
            <Sidebar/>

            <div className='content'>
                <Header pageTitle = 'Orçamento' userName = 'Bruno Hunoff'/>
                <OrcamentoData lajes={lajes} setLajes={setLajes} dataRows={dataRows} setDataRows={setDataRows}/>
                <NavRow nextPage='calculo' showVoltar={true}/>
            </div>
        </div>
    )
}

export default Orcamento