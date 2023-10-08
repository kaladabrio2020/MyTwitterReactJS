import { dataBase }            from 'backend/firebaseconfig';
import { addDoc , collection } from 'firebase/firestore';
import { verificandoExitenciaDeUsuario } from 'backend/readData/Usuario';



export const AdicionandoUsuario = async( Dados ) => {
    if ( verificandoExitenciaDeUsuario( Dados.user,Dados.email ) )
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