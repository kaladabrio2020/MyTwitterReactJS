import React ,{ useEffect }    from "react";
import Styles   from "./MainPage.module.css";
import { Link } from "react-router-dom";

export default function MainPage(){

    useEffect(()=>{
        document.body.style.backgroundColor="#41729F"
    })

    return(
      
        <div className={Styles.DivMain}>

             <div className={Styles.DivText}>
                <h1>My Twitter</h1>
                <p>Um Projeto de cadeira de Tecnicas de Programação I feito em java agora em React js.</p>
            </div>  

                <div className={Styles.DivUser}>
                    <form className={Styles.FormInput}>
                        <input type="text"     placeholder="E-mail ou nome de usuario" className={Styles.InputLogin} />   
                        <input type="password" placeholder="Senha"                     className={Styles.InputLogin} /> 
                    </form>

                <div className={Styles.DivEsqueceuSenha}>
                    <button className={Styles.buttonEsqueceuSenha}><u>Esqueceu sua senha?</u></button>
                </div>
                
                <div className={Styles.DivButtonEntrar}>
                    <Link>
                        <button className={Styles.buttonEntrar}>Entrar</button>
                    </Link>
                </div>

                 <div className={Styles.DivButtonCriarConta}>
                    <Link to="/criarconta">
                        <button className={Styles.buttonCriarConta} u>Criar Conta</button>
                    </Link>
                </div>
            </div>   
     
        </div>

    )
}