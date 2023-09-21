import React,{useEffect} from "react";
import  Styles  from "./CriarConta.module.css";

export default function CriarConta(){

    useEffect(()=>{
        document.body.style.backgroundColor="#f0f8ff";
    })

    return(
        <div className={Styles.DivMain}>
            <div>
                <h1 className={Styles.textoh1}>Cadastro</h1>
            </div>
            <div className={Styles.DivFormulario}>
                <form className={Styles.FormCadastro}>
                    <input  className={Styles.InputFormulario} placeholder="Nome"               type="text"     />
                    <input  className={Styles.InputFormulario} placeholder="Sobrenome"          type="text"     />
                    <input  className={Styles.InputFormulario} placeholder="Data de Nasimento"  type="date"     />
                    <input  className={Styles.InputFormulario} placeholder="Email"              type="email"    />
                    <input  className={Styles.InputFormulario} placeholder="Senha"              type="password" />
                    <input  className={Styles.InputFormulario} placeholder="Corfime Senha"      type="password" />
                    <input  className={Styles.InputFormulario} placeholder="Nome de Usuario"    type="text"     />


                </form>
                
            </div>
        </div> 
    

    )
}