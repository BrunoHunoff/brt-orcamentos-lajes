import { useNavigate } from "react-router-dom";
import LinkBtn from "../LinkBtn/LinkBtn";
import "./NavRow.css";
import { useState, useContext } from "react";
import { OrcamentoContext } from "../../contexts/OrcamentoContext";
import Swal from "sweetalert2";

function NavRow({ showVoltar, onNext, showAvancar, showSalvar }) {
  const navigate = useNavigate();

  const resetState = useContext(OrcamentoContext)

  const [goHome, setGoHome] = useState(false);

  const handleVoltar = () => {
    navigate(-1);
  };

  const handleAvancar = () => {
    onNext();
  };

  

  const handleCancelar = () => {

    Swal.fire({
      title: "As alterações serão perdidas!",
      showCancelButton: true,
      confirmButtonText: "Sair",
      customClass: "cancelar-modal"
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        navigate('/')
      }
    });


    resetState();

    navigate('/')
  }

  return (
    <div className="nav-row-container">


      <button
          className="nav-btn cancelar-btn"
          onClick={handleCancelar}
          style={{ background: "#CB4646" }}
        >
          Sair
        </button>

      {showVoltar && (
        <button
          className="nav-btn"
          onClick={handleVoltar}
          style={{ background: "#717A84" }}
        >
          Voltar
        </button>
      )}

      {showAvancar && (
        <button
          className="nav-btn"
          onClick={handleAvancar}
          style={{ background: "#2D3F51", color: "#fff" }}
        >
          Avançar
        </button>
      )}
      {showSalvar && (
        <button
          className="nav-btn"
          onClick={handleAvancar}
          style={{ background: "#2D3F51", color: "#fff" }}
        >
          Salvar
        </button>
      )}
    </div>
  );
}

export default NavRow;
