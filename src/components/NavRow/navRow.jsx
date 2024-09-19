import { useNavigate } from 'react-router-dom';
import LinkBtn from '../LinkBtn/LinkBtn';
import './NavRow.css';

function NavRow({ showVoltar, nextPage }) {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-1); // Volta para a página anterior
  };

  const handleAvancar = () => {
    navigate(`/${nextPage}`); // Navega para a próxima página
  };

  return (
    <div className='nav-row-container'>
      <LinkBtn linkTo='/home' btnName='Cancelar' btnColor='#CB4646' />
      {showVoltar && (
        <button className='nav-btn' onClick={handleVoltar} style={{ background: '#717A84' }}>
          Voltar
        </button>
      )}
      <button className='nav-btn' onClick={handleAvancar} style={{ background: '#2D3F51', color: '#fff' }}>
        Avançar
      </button>
    </div>
  );
}

export default NavRow;
