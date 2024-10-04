import React from 'react';
import './clientModal.css'; // Arquivo CSS para estilos
import Input from '../Input/input';
import TableBtn from '../TableBtn/tableBtn';
import { useRef } from 'react';

const ClientModal = ({ isOpen, onClose, onAdd }) => {
  if (!isOpen) return null;

  const inputName = useRef()
  const inputCnpj = useRef()
  const inputType = useRef()
  const inputCep = useRef()
  const inputCity = useRef()
  const inputState = useRef()
  const inputAddress = useRef()
  const inputAddressNumber = useRef()
  const inputEmail = useRef()
  const inputPhoneNumber = useRef()

  function createCostumer() {
    const costumer = [
      inputName.current.value, 
      true, 
      inputType.current.value, 
      inputCep.current.value, 
      inputCity.current.value, 
      inputState.current.value, 
      inputAddress.current.value, 
      parseInt(inputAddressNumber.current.value),
      inputEmail.current.value, 
      inputPhoneNumber.current.value
    ]

    onAdd(costumer)
    onClose()
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Cadastro de Cliente</h2>
        <form className='modal-form'>
          {/* Primeira linha: Nome, CNPJ/CPF e Tipo */}
          <div className="form-row">
            <Input
            labelText="Nome"
            inputType="text"
            placeHolder="Digite o nome"
            inputId="clientName"
            width="240px"
            ref={inputName}
            />
            <Input
            labelText="CPF/CNPJ"
            inputType="text"
            placeHolder="Digite o CPF/CNPJ"
            inputId="clientCpf"
            width="240px"
            ref={inputCnpj}
            />
            <div className="modal-select">
              <label htmlFor="tipo">Tipo</label>
              <select id="tipo" name="tipo" ref={inputType}>
                <option value="empresa">Empresa</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
              </select>
            </div>
          </div>

          {/* Segunda linha: CEP, Cidade e UF */}
          <div className="form-row">
          <Input
            labelText="CEP"
            inputType="text"
            placeHolder="Digite o CEP"
            inputId="clientCep"
            width="240px"
            ref={inputCep}
            />
            <Input
            labelText="Cidade"
            inputType="text"
            placeHolder="Digite a cidade"
            inputId="clientCity"
            width="240px"
            ref={inputCity}
            />
            <Input
            labelText="UF"
            inputType="text"
            placeHolder="UF"
            inputId="clientState"
            width="40px"
            ref={inputState}
            />
          </div>

          {/* Terceira linha: Endereço e Nº */}
          <div className="form-row">
          <Input
            labelText="Endereço"
            inputType="text"
            placeHolder="Digite o Endereço"
            inputId="clientStreet"
            width="240px"
            ref={inputAddress}
            />
            <Input
            labelText="Nº"
            inputType="number"
            placeHolder="Nº"
            inputId="clientStreetNumber"
            width="40px"
            ref={inputAddressNumber}
            />
          </div>

          {/* Quarta linha: E-mail e Contato */}
          <div className="form-row">
          <Input
            labelText="E-mail"
            inputType="email"
            placeHolder="Digite o e-mail"
            inputId="clientEmail"
            width="240px"
            ref={inputEmail}
            />
            <Input
            labelText="Contato"
            inputType="tel"
            placeHolder="Digite o número"
            inputId="clientNumber"
            width="240px"
            ref={inputPhoneNumber}
            />
          </div>

            <div className='form-row btn-row'>
                <TableBtn btnName='Cancelar' btnColor='#CB4646' onClick={onClose}/>
                <TableBtn btnName="Cadastrar" onClick={createCostumer} btnColor='#2D3F51'/>
            </div>
        </form>
        
      </div>
    </div>
  );
};

export default ClientModal;
