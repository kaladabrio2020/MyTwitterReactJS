import { dataBase } from "backend/firebaseconfig";
import { getAuth ,signInWithEmailAndPassword } from "firebase/auth";
import { getDocs , collection, query  ,where, writeBatch}  from "firebase/firestore";


export const verificandoExitenciaDeUsuario = async(NomeUser,Email)=>{
    const cursor  = query(
        collection( dataBase, "usuarios"),
            and(
                where('email','==',Email),
                where('user' ,"==",NomeUser)
            )
        );
    const querySnapshot = await getDocs(cursor_exe);
}

export const verificandoUsuarioLogin  = async(User,Password) =>{
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