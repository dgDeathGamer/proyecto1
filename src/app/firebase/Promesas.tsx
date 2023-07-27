import { Persona } from "../Interface/Interfaces"
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore"; 
import { db } from "./Conexion";

export const registrarPersona = async (p:Persona)=>{
    const docRef = await addDoc(collection(db, "personas"), p);

}

export const Obtenerpersonas = async ()=>{
    var listado:Persona[] = []; //La variable listado es una lista de personas, el [] es importante, es para hacer que lea muchas "Persona" y no solo 1.
    const querySnapshot = await getDocs(collection(db, "personas")); //la colección va a ser recuperada por este querySnapshot
    querySnapshot.forEach((doc) =>{ //y esto buscará entre las colecciones
    // doc.data() is never undefined for query doc snapshots. 
    var p:Persona = {
        idPersona:doc.id, //este es distinto a los otros, ya que es el id del documento.
        nombre:doc.data().nombre,
        apellido:doc.data().apellido,
        edad:doc.data().edad,
        contrasenia:doc.data().contrasenia,
    }
    listado.push(p)
    console.log(doc.id, " => ", doc.data()); //recuperame el id del documento => luego muestrame los datos.
    });
    return listado;
}
//esto es muy parecido al DAO, osea recibira la información del formulario y luego eso se podrá enviar a la base de datos.

export const obtenerPersona = async(idPersona:string)=>{
    const docRef = doc(db, "personas", idPersona);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const p:Persona = {
            nombre:docSnap.data().nombre,
            apellido:docSnap.data().apellido,
            edad:docSnap.data().edad,
            contrasenia:docSnap.data().contrasenia,
            idPersona:docSnap.id
        }
        return p
    } else {
    // docSnap.data() will be undefined in this case
        return undefined
    }
}
export const actualizarPersona = async(idPersona:string,p:Persona)=>{
    const docRef = doc(db, "personas", idPersona);

// Set the "capital" field of the city 'DC'
    await updateDoc(docRef, {...p});
}
export const eliminarPersona = async(idPersona:string)=>{
    await deleteDoc(doc(db, "personas", idPersona));
}