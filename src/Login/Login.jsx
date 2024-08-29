import './Login.css';

function Login() {
    return (
        <>
          <div id='loginContainer'>
            <form id='loginForm' action="">
              <h1>Bem-vindo(a)</h1>

              <label htmlFor="emailForm">Email</label>
              <input type="email" name="email" id="emailInput"/>

              <label htmlFor="passwordInput">Senha</label>
              <input type="password" name="password" id="passwordInput"/>

              <button>Enviar</button>
            </form>
          </div>
        </>
    );
}

export default Login;
