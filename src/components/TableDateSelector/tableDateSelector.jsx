import ArrowLeftIcon from '../Icons/ArrowLeft'
import ArrowRightIcon from '../Icons/ArrowRight'
import './tableDateSelector.css'

function TableDateSelector() {
    return (
        <div className='date-selector'>
            <button className='arrow'>
                <ArrowLeftIcon/>
            </button>

            <button id='date-selector-btn'>Setembro</button>

            <button className='arrow'>
                <ArrowRightIcon/>
            </button>
            
        </div>
    )
}

export default TableDateSelector