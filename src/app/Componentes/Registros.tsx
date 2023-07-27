import React, {useEffect, useState} from 'react'
import { Obtenerpersonas } from '../Firebase/Promesas'
import { Persona } from '../Interface/Interfaces'
import { Link } from 'react-router-dom'

export const Registros = () => {
    const [personas, setPersonas] = useState<Persona[]>([])

    const renderizarDatos = ()=>{
        var elementos = personas.map((p)=>{ //map convierte los items en un mapa. osea voy a mapear persona por persona, 1x1.
            return <tr>
                <td>{p.nombre}</td>
                <td>{p.apellido}</td>
                <td>{p.edad}</td>
                <td>{p.contrasenia}</td>
                <td><Link to={"/actualizar/"+p.idPersona}>Actualizar</Link></td>
                <td><Link to={"/eliminar/"+p.idPersona}>Eliminar</Link></td>
            </tr>
        })
        return elementos
    }

    useEffect(()=>{
        //Cargar los datos del firebase. el useEffect es para agregar cosas, como cargando el cual saldrá en la consola. Al no poner nada dentro de los [] estamos simulando un Onload
        Obtenerpersonas().then((listado)=>{
            console.log("CARGANDO LISTADO")
            console.log(listado)
            setPersonas(listado) //estamos seteando al estado lo que viene de la base de datos.
        });

    },[])


  return (
    <table>
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Contrasenia</th>
            <th>Editar</th>
            <th>Eliminar</th>
        </tr>
        {
            renderizarDatos()
        }
    </table>
  )
}
//importante el then para obtener el listado.