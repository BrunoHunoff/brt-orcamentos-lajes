import Input from '../Input/input'
import './orcamentoDataHeader.css'

function OrcamentoDataHeader() {
    return (
        <div className="orcamentoDataHeader">
            <div className="number-row">
                <Input labelFor= '' labelText='Nº Orçamento' inputType='text' placeHolder='00-000-0000' inputId='orcamentoNumber' width='140px' textAlign='center'/>
            </div>

            <div className="data-row">
                <Input labelText='Cliente' inputType='text' placeHolder='Selecione' inputId='orcamentoClient' width='220px'/>
                <Input labelText='Cidade' inputType='text' placeHolder='Selecione' inputId='orcamentoCity' width='220px'/>
                <Input labelText='UF' inputType='text' placeHolder='UF' inputId='orcamentoUf' width='60'px/>
                <Input labelText='Tipo Frete' inputType='text' placeHolder='Selecione' inputId='orcamentoFreightType' width='120px'/>
                <Input labelText='Valor Carga' inputType='text' placeHolder='R$' inputId='freightPrice' width='200px'/>
            </div>
        </div>
    )
}

export default OrcamentoDataHeader