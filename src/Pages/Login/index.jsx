import React from "react";
import { FaFacebook, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import './index.css';

function Login() {
    return(
        <div className="containerLogin">

            <div>
                <img src="https://courier-images-web.imgix.net/static/img/logo.png?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2&fm=png" width={300} alt="Logo da adega" />
            </div>

            <div className="form-group">
                <button className="btn-facebook"><FaFacebook className="fb-icon" />  <div className="line-fb"></div>  CONTINUAR COM FACEBOOK</button>
            </div>

            <div>
                <div className="line"></div>
            </div>


            <div><h4>Entre com e-mail e senha</h4></div>

            <div className="form-group">
                <input type="text" className="input-login" placeholder="E-mail" />
            </div>
            <div className="form-group">
                <input type="text" className="input-login" placeholder="Senha" />
            </div>

            <div className="form-group">
                <Link to="/cliente"><button className="btn-login">ENTRAR</button></Link>
            </div>
        </div>
    )
}

export default Login;