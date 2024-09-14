
import LinkBtn from '../LinkBtn/LinkBtn'
import './NavRow.css'

function NavRow() {
    return(
        <div className='nav-row-container'>
            <LinkBtn linkTo='/home' btnName='Cancelar' btnColor='#CB4646'/>
            <LinkBtn linkTo='/home' btnName='Voltar' btnColor='#717A84'/>
            <LinkBtn linkTo='/calculo' btnName='Avançar' btnColor='#2D3F51'/>
        </div>
    )
}

export default NavRow