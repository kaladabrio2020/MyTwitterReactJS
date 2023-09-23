import React,{ useEffect, useState } from "react";
import { useNavigate }          from 'react-router-dom';
import  Styles                  from "./criarConta.module.css";
import  { AdicionandoUsuario }  from "backend/writeData/Usuario";

export default function CriarConta(){
    
    const navigate = useNavigate();
    const [Dados , setDados] = useState({});
    const [Nome,SetNome                    ] = useState(null);
    const [Sobrenome,SetSobrenome          ] = useState(null);
    const [DataNascimento,SetDataNascimento] = useState(null);
    const [Email,SetEmail                  ] = useState(null);
    const [Password,SetPassword            ] = useState(null);
    const [Password2,SetPassword2          ] = useState(null);
    const [NomeDeUsuario,SetNomeDeUsuario  ] = useState(null);


    useEffect(()=>{
        document.body.style.backgroundColor="#41729F";
    });

    const SetData    = () =>{
        setDados({
            "nome"           : Nome,
            "sobrenome"      : Sobrenome,
            "dataNascimento" : DataNascimento,
            "email"          : Email         ,
            "password"       : Password      ,
            "user"           : NomeDeUsuario ,
        })
    }
    const CriarConta = async() =>{
        SetData();
        try{
            
            if ( Password2 == Password && Password.length >= 6){
                if ( await AdicionandoUsuario(Dados))
                {
                    alert("cadastrado");
                    navigate(-1);
                }else{
                    alert("invalido else");
                }
            }else{
                alert('Invalido')
            }
        }catch(error){
            alert("Senha não possui no minimo 8 caracteres ou está nula");
        }
    }

    return(
        <div className={Styles.DivMain}>
            
            <div>
                <h1 className={Styles.textoh1}>Cadastro</h1>
            </div>

            <div className={Styles.DivFormulario}>
                <form className={Styles.FormCadastro}>

                    <input  className={Styles.InputFormulario} placeholder="Nome"               type="text"      value={Nome}            id="Nome"             onChange={(e)=>SetNome(e.target.value)}          />
                    <input  className={Styles.InputFormulario} placeholder="Sobrenome"          type="text"      value={Sobrenome}       id="Sobrenome"        onChange={(e)=>SetSobrenome(e.target.value)}     />
                    <input  className={Styles.InputFormulario} placeholder="Data de Nasimento"  type="date"      value={DataNascimento}  id="DataNascimento"   onChange={(e)=>SetDataNascimento(e.target.value)}/>
                    <input  className={Styles.InputFormulario} placeholder="Email"              type="email"     value={Email}           id="Email"            onChange={(e)=>SetEmail(e.target.value)}         />
                    <input  className={Styles.InputFormulario} placeholder="Senha"              type="password"  value={Password}        id="Password"         onChange={(e)=>SetPassword(e.target.value)}      />
                    <input  className={Styles.InputFormulario} placeholder="Corfime Senha"      type="password"  value={Password2}       id="Password2"        onChange={(e)=>SetPassword2(e.target.value)}     />
                    <input  className={Styles.InputFormulario} placeholder="Nome de Usuario"    type="text"      value={NomeDeUsuario}   id="NomeDeUsuario"    onChange={(e)=>SetNomeDeUsuario(e.target.value)} />
                
                </form>

                <div className={Styles.DivButtonCriarConta}>
                    <button className={Styles.ButtonCriarConta} onClick={CriarConta}>
                        Criar Conta 
                    </button>
                </div>     

            </div>
        </div> 
    )
}