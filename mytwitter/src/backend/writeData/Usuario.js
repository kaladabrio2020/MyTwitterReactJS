import { dataBase ,app}        from 'backend/firebaseconfig';
import { addDoc , collection } from 'firebase/firestore';
import { verificandoExitenciaDeUsuario } from 'backend/readData/Usuario';
import { getAuth , createUserWithEmailAndPassword, reauthenticateWithCredential } from 'firebase/auth';



export const AdicionandoUsuario = async( Dados ) => {
    if ( await verificandoExitenciaDeUsuario( Dados.user,Dados.email ) )
    {
        return false;
    }
    
    addDoc( 
        collection( dataBase , 'usuarios') , Dados
    ).then((docref)=> { return true; }

    ).catch((error)=>{ return false; }
    
    );
    return true;
}


export const CriarEmail = (email,senha) =>{
    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth,email,senha)
    .then( ()=>{ return true; })
    .catch(()=>{ return false;})
}