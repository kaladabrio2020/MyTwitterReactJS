import React from "react";
import Styles from "./MainPage.module.css";

export default function MainPage(){
    return(
        <body>
            <div className={Styles.DivMain}>

                <div className={Styles.DivText}>
                    <h1>My Twitter</h1>
                    <p>Um projeto de cada de Tecnicas de Programação I feito em java agora em React js.</p>
                </div>  

                <div className={Styles.DivUser}>

                    <form className={Styles.FormInput}>
                        <input type="text"     placeholder="E-mail ou Cpf"  />   
                        <input type="password" placeholder="Senha"          /> 
                    </form>

                    <div className={Styles.DivEsqueceuSenha}>
                        <button className={Styles.buttonEsqueceuSenha}><u>Esqueceu sua senha?</u></button>
                    </div>
                    
                    <div className={Styles.DivButtonEntrar}>
                        <button className={Styles.buttonEntrar}>Entrar</button>
                    </div>

                    <div className={Styles.DivButtonCriarConta}>
                        <button className={Styles.buttonCriarConta}>Criar Conta</button>
                    </div>
                </div>      
            
            </div>
        
        </body>
    )
}