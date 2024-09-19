import './calculoTable.css'

function CalculoTable( { tableName } ) {
    return (
        <div className='calculo-table'>
            <div className='calculo-title-row'>Contribuição</div>

            <div className='calculo-table-content'>
                <div className='calculo-row'>
                    <span>Contribuição</span>
                    <input type='text' name='contribuicao'/>
                    <span>R$6.400,00</span>
                </div>
                <div className='calculo-row'>
                    <span>Comissão</span>
                    <input type='text' name='contribuicao'/>
                    <span>R$2.400,00</span>
                </div>
                <div className='calculo-row'>
                    <span>Admin</span>
                    <input type='text' name='contribuicao'/>
                    <span>R$4.800,00</span>
                </div>
                <div className='calculo-row'>
                    <span>Tributário</span>
                    <input type='text' name='contribuicao'/>
                    <span>R$5.250,00</span>
                </div>
                <div className='calculo-row'>
                    <span>Extra</span>
                    <input type='text' name='contribuicao'/>
                    <span>R$0,00</span>
                </div>
                <div className='calculo-row total'>
                    <span>Total</span>
                    <span className='total-perc'>54%</span>
                    <span>R$18.850,00</span>
                </div>
            </div>
        </div>
    )
}

export default CalculoTable