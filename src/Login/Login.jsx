import { useState } from 'react';
import './Login.css';
import {useNavigate} from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const regexEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginValidate = (data, type) => {
      if (!data.value && data.dirty) {
        return <h4>Campo Obrigatório!</h4>;
      } else if (!!data.value && type === 'email' && !regexEmail.test(data.value)) {
        return <h4>Email inválido!</h4>;
      }
      return null;
    };

    const handleEmailChange = (e) => {
      setEmail({value: e.target.value, dirty:true})
    };
    const handlePasswordChange = (e) => {
      setPassword({value: e.target.value, dirty:true})
    };
    

    return (
        <>
          <div id='loginContainer'>
            <form id='loginForm' action="">
                <h1>Login</h1>
              <h3>Gotta catch 'em all!!</h3>

              <label htmlFor="emailForm">Email</label>
              <input onChange={(e) => {handleEmailChange(e)}} type="email" name="email" id="emailInput"/>
              {loginValidate(email, 'email')}
              <label htmlFor="passwordInput">Senha</label>
              <input onChange={(e) => {handlePasswordChange(e)}} type="password" name="password" id="passwordInput"/>
              {loginValidate(password)}
              <button>Enviar</button>
            </form>
          </div>
        </>
    );
}

export default Login;
