import { dataBase } from "backend/firebaseconfig";
//import { getAuth ,signInWithEmailAndPassword } from "firebase/auth";
import { getDocs , collection, query  ,where ,and , or}  from "firebase/firestore";


export const verificandoExitenciaDeUsuario = async( NomeUser , Email )=>{
    
    try{
        var   index  = 0;
        const cursor = query(
            collection( dataBase, "usuarios"),
                or(
                    where('email','==',Email),
                    where('user' ,'==',NomeUser)
                )
            );
    
        const querySnapshot = await getDocs(cursor);
        querySnapshot.forEach((doc)=>{ index = index + 1; })
    
        if ( index >= 2 ) return true ;
        else              return false;   
    }catch(error){
        return false;
    }
    
}

export const verificandoUsuarioLogin = async(User,Password) =>{
    const cursor = query(
        collection( dataBase , "usuarios"),
        and(
            or(
                where('email','==',User),
                where('user' ,'==',User)
            ),
            where('password','==',Password)
        )
    )
}