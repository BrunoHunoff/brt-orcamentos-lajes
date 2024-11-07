import builderPlaceLogo from '../../assets/builderPlaceLogo.png';
import userImg from '../../assets/user.svg'
import lockImg from '../../assets/lock.svg'
import './login.css'

function Login() {
    return (
        <div className="login">
            <div className="login-container">
                <img src={builderPlaceLogo} alt="Builder Place Logo" className='logo-img'/>
                <div className="inputs-container">
                    <div className='input-div'>
                        <img src={userImg} alt="" className='user-img' />
                        <input type="email" id='email' placeholder='E-MAIL'/>
                    </div>
                    <div className='input-div'>
                        <img src={lockImg} alt="" className='lock-img' />
                        <input type="password" id='pawword' placeholder='SENHA'/>
                    </div>
                    <div className="login-btn-container">
                        <button className='login-btn'>LOGIN</button>
                    </div>
                    <div className='forgot-password'>
                        <button>Esqueceu a senha?</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
