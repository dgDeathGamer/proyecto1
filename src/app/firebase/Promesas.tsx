//esto es muy parecido al DAO, osea recibira la información del formulario y luego eso se podrá enviar a la base de datos.
import { Persona } from "../Interface/Interfaces"
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "./Conexion";

export const registrarPersona = async (p:Persona)=>{
    const docRef = await addDoc(collection(db, "personas"), p);
}