import { Persona } from "../Interface/Interfaces"
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { db } from "./Conexion";

export const registrarPersona = async (p:Persona)=>{
    const docRef = await addDoc(collection(db, "personas"), p);

}

export const Obtenerpersona = async ()=>{
    var listado:Persona[] = []; //La variable listado es una lista de personas, el [] es importante, es para hacer que lea muchas "Persona" y no solo 1.
    const querySnapshot = await getDocs(collection(db, "personas")); //la colección va a ser recuperada por este querySnapshot
    querySnapshot.forEach((doc) =>{ //y esto buscará entre las colecciones
    // doc.data() is never undefined for query doc snapshots. 
    var p:Persona = {
        idPersona:doc.id, //este es distinto a los otros, ya que es el id del documento.
        nombre:doc.data().nombre,
        apellido:doc.data().apellido,
        edad:doc.data().edad
    }
    listado.push(p)
    console.log(doc.id, " => ", doc.data()); //recuperame el id del documento => luego muestrame los datos.
    });
    return listado;
}
//esto es muy parecido al DAO, osea recibira la información del formulario y luego eso se podrá enviar a la base de datos.