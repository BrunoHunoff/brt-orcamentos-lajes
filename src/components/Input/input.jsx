import './input.css'

function Input( props ) {
    return(
        <div className="input-container">
            <label htmlFor={props.inputId}>{props.labelText}</label>
            <input type={props.inputType} id={props.inputId} placeholder={props.placeHolder} 
            style={{ width : props.width, textAlign : props.textAlign}}/>
        </div>
    )
}

export default Input