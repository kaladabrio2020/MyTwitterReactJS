import { dataBase }            from 'backend/firebaseconfig'
import { addDoc , collection } from 'firebase/firestore';

export const AdicionandoUsuario = async( data )=>{
    await addDoc( 
        collection( dataBase , 'usuarios') , data
    ).then((docref)=>{
        return true;
    }).catch((error)=>{
        return false;
    })
    return true;
}