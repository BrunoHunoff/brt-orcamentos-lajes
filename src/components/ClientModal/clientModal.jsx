import React from 'react';
import './clientModal.css'; // Arquivo CSS para estilos
import Input from '../Input/input';
import TableBtn from '../TableBtn/tableBtn';

const ClientModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
            />
            <Input
            labelText="CPF/CNPJ"
            inputType="text"
            placeHolder="Digite o CPF/CNPJ"
            inputId="clientCpf"
            width="240px"
            />
            <div className="modal-select">
              <label htmlFor="tipo">Tipo</label>
              <select id="tipo" name="tipo">
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
            />
            <Input
            labelText="Cidade"
            inputType="text"
            placeHolder="Digite a cidade"
            inputId="clientCity"
            width="240px"
            />
            <Input
            labelText="UF"
            inputType="text"
            placeHolder="UF"
            inputId="clientState"
            width="40px"
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
            />
            <Input
            labelText="Nº"
            inputType="number"
            placeHolder="Nº"
            inputId="clientStreetNumber"
            width="40px"
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
            />
            <Input
            labelText="Contato"
            inputType="tel"
            placeHolder="Digite o número"
            inputId="clientNumber"
            width="240px"
            />
          </div>

            <div className='form-row btn-row'>
                <TableBtn btnName='Cancelar' btnColor='#CB4646' onClick={onClose}/>
                <TableBtn btnName="Cadastrar" btnColor='#2D3F51'/>
            </div>
        </form>
        
      </div>
    </div>
  );
};

export default ClientModal;
