import React ,{ useEffect, useState }    from "react";
import styles   from "./mainPage.module.css";
import { Link } from "react-router-dom";

export default function MainPage(){
    const [User,setUser]         = useState(null);
    const [Password,setPassword] = useState(null);

    useEffect(()=>{
        document.body.style.backgroundColor="#41729F"
    })

    return(
      
        <div className={styles.DivMain}>

             <div className={styles.DivText}>
                <h1>My Twitter</h1>
                <p>Um Projeto de cadeira de Tecnicas de Programação I feito em java agora em React js.</p>
            </div>  

                <div className={styles.DivUser}>
                    <form className={styles.FormInput}>
                        <input type="text"     placeholder="E-mail ou nome de usuario" className={styles.InputLogin} value={User}     onChange={(e)=>setUser(e.target.value)}     />   
                        <input type="password" placeholder="Senha"                     className={styles.InputLogin} value={Password} onChange={(e)=>setPassword(e.target.value)} /> 
                    </form>

                <div className={styles.DivEsqueceuSenha}>
                    <button className={styles.buttonEsqueceuSenha}><u>Esqueceu sua senha?</u></button>
                </div>
                
                <div className={styles.DivButtonEntrar}>
                    <Link to='usuario'>
                        <button className={styles.buttonEntrar}>Entrar</button>
                    </Link>
                </div>

                 <div className={styles.DivButtonCriarConta}>
                    <Link to="/criarconta">
                        <button className={styles.buttonCriarConta} u>Criar Conta</button>
                    </Link>
                </div>
            </div>   
     
        </div>

    )
}