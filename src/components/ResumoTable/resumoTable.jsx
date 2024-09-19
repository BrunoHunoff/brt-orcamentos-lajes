import './resumoTable.css'

function ResumoTable() {
    return (
    
        <div className='resumo-table'>
            <div className='resumo-title-row'>Resumo</div>

            <div className='resumo-table-content'>
                <div className='resumo-row total'>
                    <span>Valor Total</span>
                    <span>R$51.396,77</span>
                </div>
                <div className='resumo-row'>
                    <span>Área Total</span>
                    <span>500m²</span>
                </div>
                <div className='resumo-row'>
                    <span>RS/m²</span>
                    <span>R$102,8</span>
                </div>
                <div className='resumo-row'>
                    <span>Peso Total</span>
                    <span>168,90t</span>
                </div>
                <div className='resumo-row'>
                    <span>Quantidade Fretes</span>
                    <span>6</span>
                </div>
            </div>
        </div>
    )
}

export default ResumoTable