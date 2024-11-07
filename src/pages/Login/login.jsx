import builderPlaceLogo from "../../assets/builderPlaceLogo.png";
import userImg from "../../assets/user.svg";
import lockImg from "../../assets/lock.svg";
import "./login.css";
import { useState } from "react";
import apiLajes from "../../../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null);
  const [declined, setDeclined] = useState(false)

    const navigate = useNavigate();

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function clearStates() {
    setEmail('')
    setPassword('')
  }

  async function login() {
    try {
      const response = await apiLajes.post("/login", {
        email: email,
        password: password,
      });

      const token = response.data.token
      console.log(token)

      navigate('/home')

    } catch {
      setDeclined(true);
    } finally {
        clearStates()
    }

  }

  return (
    <div className="login">
      <div className="login-container">
        <img
          src={builderPlaceLogo}
          alt="Builder Place Logo"
          className="logo-img"
        />
        <div className="inputs-container">
          <div className="input-div">
            <img src={userImg} alt="" className="user-img" />
            <input
              type="email"
              id="email"
              placeholder="E-MAIL"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="input-div">
            <img src={lockImg} alt="" className="lock-img" />
            <input
              type="password"
              id="pawword"
              placeholder="SENHA"
              value={password}
              onChange={handlePassword}
            />
          </div>

            {declined && <div className="login-error">
                <span>Registro não encontrado em nossa base <br /></span>
                <span>Verifique e-mail e senha</span>
            </div>
}

          <div className="login-btn-container">
            <button className="login-btn" onClick={login}>
              LOGIN
            </button>
          </div>
          <div className="forgot-password">
            <button>Esqueceu a senha?</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
