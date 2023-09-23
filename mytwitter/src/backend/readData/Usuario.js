import { dataBase } from "backend/firebaseconfig";
import { getAuth ,signInWithEmailAndPassword } from "firebase/auth";
import { getDocs , collection, query  ,where}  from "firebase/firestore";


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
