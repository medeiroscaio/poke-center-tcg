import React, { useState } from "react";
import "./Login.css";
import loginBackground from "../assets/login-background.mp4";

const LoginComponent = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const loginValidate = (value, type = "password") => {
    if (type === "email" && !/\S+@\S+\.\S+/.test(value)) {
      return <p>Email inválido</p>;
    }
    if (type === "password" && value.length < 6) {
      return <p>A senha deve ter no mínimo 6 caracteres</p>;
    }
    return null;
  };

  return (
    <div
      className={`container ${isSignUpMode ? "right-panel-active" : ""}`}
      id="container"
    >
      <video autoPlay muted loop className="background-video">
        <source src={loginBackground} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Criar Conta</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>ou use seu email para se registrar</span>
          <input type="text" placeholder="Nome" />
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
          {loginValidate(email, "email")}
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Senha"
          />
          {loginValidate(password)}
          <button>Criar Conta</button>
        </form>
      </div>

      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Entrar</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>ou use sua conta</span>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
          {loginValidate(email, "email")}
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Senha"
          />
          {loginValidate(password)}
          <a href="#">Esqueceu sua senha?</a>
          <button>Entrar</button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Bem-vindo de volta!</h1>
            <p>
              Para se manter conectado conosco, faça login com suas informações
              pessoais
            </p>
            <button
              className="ghost"
              id="signIn"
              onClick={() => setIsSignUpMode(false)}
            >
              Entrar
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Olá, Amigo!</h1>
            <p>Insira seus dados pessoais e comece sua jornada conosco</p>
            <button
              className="ghost"
              id="signUp"
              onClick={() => setIsSignUpMode(true)}
            >
              Criar Conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
