import './Login.css';
import {useNavigate} from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    return (
        <>
          <div id='loginContainer'>
            <form id='loginForm' action="">
                <h1>Login</h1>
              <h3>Gotta catch 'em all!!</h3>

              <label htmlFor="emailForm">Email</label>
              <input type="email" name="email" id="emailInput"/>

              <label htmlFor="passwordInput">Senha</label>
              <input type="password" name="password" id="passwordInput"/>

              <button onClick={() => navigate("/Admin")}>Enviar</button>
            </form>
          </div>
        </>
    );
}

export default Login;
