import './headerRow.css'

function HeaderRow() {
    return(
        <div className='headerRow'>
            <span className='item-1'>Item</span>
            <span className='item-2'>Quantidade</span>
            <span className='item-3'>Tipo</span>
            <span className='item-2'>Vão max (m)</span>
            <span className='item-2'>SCA (kg/m²)</span>
            <span className='item-2'>Largura (m)</span>
            <span className='item-2'>Comprimento (m)</span>
        </div>
    )
}

export default HeaderRow