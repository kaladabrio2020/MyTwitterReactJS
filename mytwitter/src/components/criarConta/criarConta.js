import React,{ useEffect, useState } from "react";
import { useNavigate }          from 'react-router-dom';
import  styles                  from "./criarConta.module.css";
import  { AdicionandoUsuario, CriarEmail }  from "backend/writeData/Usuario";

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

    const SetData = () =>{
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
                try{
                    if ( AdicionandoUsuario(Dados) )
                    {
                        CriarEmail(Email,Password);
                        alert("cadastrado");
                        navigate('/')
                    }else{
                        alert("Usuario existente ou error");
                    }
                }catch(error){
                    alert(error.message);
                }
            }
            else{ 
                alert('Invalido');
            }
        }catch(error){
            alert("Senha não possui no minimo 6 caracteres ou está nula \n"+error.message);
        }
    }

    return(
        <div className={styles.DivMain}>
            
            <div>
                <h1 className={styles.textoh1}>Cadastro</h1>
            </div>

            <div className={styles.DivFormulario}>
                <form className={styles.FormCadastro}>

                    <input  className={styles.InputFormulario} placeholder="Nome"               type="text"      value={Nome}            id="Nome"             onChange={(e)=>SetNome(e.target.value)}          />
                    <input  className={styles.InputFormulario} placeholder="Sobrenome"          type="text"      value={Sobrenome}       id="Sobrenome"        onChange={(e)=>SetSobrenome(e.target.value)}     />
                    <input  className={styles.InputFormulario} placeholder="Data de Nasimento"  type="date"      value={DataNascimento}  id="DataNascimento"   onChange={(e)=>SetDataNascimento(e.target.value)}/>
                    <input  className={styles.InputFormulario} placeholder="Email"              type="email"     value={Email}           id="Email"            onChange={(e)=>SetEmail(e.target.value)}         />
                    <input  className={styles.InputFormulario} placeholder="Senha"              type="password"  value={Password}        id="Password"         onChange={(e)=>SetPassword(e.target.value)}      />
                    <input  className={styles.InputFormulario} placeholder="Corfime Senha"      type="password"  value={Password2}       id="Password2"        onChange={(e)=>SetPassword2(e.target.value)}     />
                    <input  className={styles.InputFormulario} placeholder="Nome de Usuario"    type="text"      value={NomeDeUsuario}   id="NomeDeUsuario"    onChange={(e)=>SetNomeDeUsuario(e.target.value)} />
                
                </form>

                <div className={styles.DivButtonCriarConta}>
                    <button className={styles.ButtonCriarConta} onClick={CriarConta}>
                        Criar Conta 
                    </button>
                </div>     

            </div>
        </div> 
    )
}