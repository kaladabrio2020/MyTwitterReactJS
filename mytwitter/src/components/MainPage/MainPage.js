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
                    <input placeholder="E-mail ou Cpf" />   <br></br>
                    <input placeholder="Senha" />           <br></br>
                    <button title="Entrar"/>
                </div>      
            
            </div>
        
        </body>
    )
}