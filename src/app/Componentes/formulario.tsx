'use client'
import React, { useState } from 'react'
import { Persona } from '../Interface/Interfaces';
import { registrarPersona } from '../Firebase/Promesas';

export const Formulario = () => {

    const [nombre, setNombre] = useState<string>('');
    const [apellido, setApellido] = useState<string>('');
    const [edad, setEdad] = useState<number>(0);
    const [contrasenia, setContrasenia] = useState<string>('')
    //const [fecha_nac, setFecha_nacimiento] = useState<Date>()
    const [errorEdad, setErrorEdad] = useState("");
    const registrar = () => {
        if (edad > 0) {
            console.log("Nombre:", nombre);
            console.log("Apellido:", apellido);
            console.log("Edad:", edad);
            alert("Bienvenido " + nombre + " " + apellido + " Edad: " + edad)
            const p: Persona = { //"const p" es una constante, osea no se repite, es un objeto del tipo "persona".
                nombre: nombre,
                apellido: apellido,
                edad: edad,
                contrasenia: contrasenia,
                //fecha_nac: fecha_nac,
            }//ahora pasarlo al "DAO"
            registrarPersona(p)
        } else {
            setErrorEdad("la edad debe ser positiva")
        }

    }
    return (
        <form>

            <label>Nombre:</label><br />
            <input type='text' onChange={(e) => setNombre(e.target.value)} />
            <br />

            <label>Apellido:</label><br />
            <input type='text' onChange={(e) => setApellido(e.target.value)} />
            <br />

            <label>Edad:</label><br />
            <input type='number' onChange={(e) => setEdad(parseInt(e.target.value))} />
            <span>{errorEdad}</span>
            <br />

            <label>Contraseña</label><br />
            <input type="password" onChange={(e) => setContrasenia(e.target.value)} />
            <br />

            <label>Fecha_nac</label><br />
            <input type="date" />
            <br />

            <label>email</label><br />
            <input type="email" />
            <br />

            <label>N° Telefono</label><br />
            <input type="tel" />
            <br />

            <label>Seleccione el servidor en el cual va a jugar</label><br />
            <select><br />
                <option value="Las">LAS</option>
                <option value="Lan">LAN</option>
                <option value="Asia">Asia</option>
                <option value="EUW">EUW</option>
                <option value="NA">NA</option>
            </select><br />

            <label>Sexo:</label><br />
            <div>
                <input type="radio" name="sexo" value="hombre"></input><label>hombre</label><br />
                <input type="radio" name="sexo" value="Mujer"></input><label>Mujer</label><br />
            </div>
            <button onClick={registrar} type='button'>Registrar</button>
        </form>
    )
}