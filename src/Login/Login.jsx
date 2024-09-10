import React, { useState } from "react";
import "./Login.css";
import loginBackground from "../assets/login-background.mp4";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const LoginComponent = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const regexEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email.value && password.value) {
      navigate("/Admin");
    } else {
      setEmail({ ...email, dirty: true });
      setPassword({ ...password, dirty: true });
    }
  };

  const loginValidate = (data, type) => {
    if (!data.value && data.dirty) {
      return <h4>Campo Obrigatório!</h4>;
    } else if (
      !!data.value &&
      type === "email" &&
      !regexEmail.test(data.value)
    ) {
      return <h4>Email inválido!</h4>;
    }
    return null;
  };

  const handleNameChange = (e) => {
    setName({ value: e.target.value, dirty: true });
  };

  const handleEmailChange = (e) => {
    setEmail({ value: e.target.value, dirty: true });
  };
  const handlePasswordChange = (e) => {
    setPassword({ value: e.target.value, dirty: true });
  };

  const resetFields = () => {
    setEmail({ value: "", dirty: false });
    setPassword({ value: "", dirty: false });
    setName({ value: "", dirty: false });
  };

  return (
    <div className="login-principal">
      <div
        className={`login-page login-container ${
          isSignUpMode ? "right-panel-active" : ""
        }`}
        id="login-container"
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
                <FaGithub />
              </a>
              <a href="#" className="social">
                <FaGoogle />
              </a>
              <a href="#" className="social">
                <FaFacebook />
              </a>
            </div>
            <span>ou use seu email para se registrar</span>
            <input
              type="text"
              placeholder="Nome"
              onChange={(e) => {
                handleNameChange(e);
              }}
            />
            {loginValidate(name)}
            <input
              type="email"
              onChange={(e) => {
                handleEmailChange(e);
              }}
              placeholder="Email"
            />
            {loginValidate(email, "email")}
            <input
              type="password"
              onChange={(e) => {
                {
                  handlePasswordChange(e);
                }
              }}
              placeholder="Senha"
            />
            {loginValidate(password)}
            <button
              onClick={() => {
                setIsSignUpMode(true);
              }}
            >
              Criar Conta
            </button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Entrar</h1>
            <div className="social-container">
              <a href="#" className="social">
                <FaGithub />
              </a>
              <a href="#" className="social">
                <FaGoogle />
              </a>
              <a href="#" className="social">
                <FaFacebook />
              </a>
            </div>
            <span>ou use sua conta</span>
            <input
              type="email"
              onChange={(e) => {
                handleEmailChange(e);
              }}
              placeholder="Email"
            />
            {loginValidate(email, "email")}
            <input
              type="password"
              onChange={(e) => {
                handlePasswordChange(e);
              }}
              placeholder="Senha"
            />
            {loginValidate(password)}
            <a href="#">Esqueceu sua senha?</a>
            <button onClick={() => handleLogin()}>Entrar</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Bem-vindo de volta!</h1>
              <p>
                Para se manter conectado conosco, faça login com suas
                informações pessoais
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => {
                  setIsSignUpMode(false), resetFields();
                }}
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
                onClick={() => {
                  setIsSignUpMode(true), resetFields();
                }}
              >
                Criar Conta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
