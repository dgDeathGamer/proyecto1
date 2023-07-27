'use client'
import React, { useState } from 'react'
import { Persona } from '../Interface/Interfaces';
import { registrarPersona } from '../Firebase/Promesas';

export const Formulario = () => {

    const [nombre, setNombre] = useState<string>('');
    const [apellido, setApellido] = useState<string>('');
    const [edad, setEdad] = useState<number>(0);
    const [contrasenia, setContrasenia] = useState<string>('');
    const [fecha_nac, setFecha_nacimiento] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [n_telefono, setNumero_Telefono] = useState<number>(0);
    const [server, setServidor] = useState<string>('');
    const [sexo, SetSexo] = useState<string>('');
    const [errorEdad, setErrorEdad] = useState("");
    const registrar = () => {
        if (edad > 0) {
            console.log("Nombre:", nombre);
            console.log("Apellido:", apellido);
            console.log("Edad:", edad);
            console.log("Servidor:", server)
            alert("Bienvenido " + nombre + " " + apellido + " Edad: " + edad)
            const p: Persona = { //"const p" es una constante, osea no se repite, es un objeto del tipo "persona".
                nombre: nombre,
                apellido: apellido,
                edad: edad,
                contrasenia: contrasenia,
                fecha_nac: fecha_nac,
                email: email,
                n_telefono: n_telefono,
                server: server,
                sexo: sexo,

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
            <input type="date" onChange={(e) => setFecha_nacimiento(e.target.value)} />
            <br />

            <label>email</label><br />
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            <br />

            <label>N° Telefono</label><br />
            <input type="tel" onChange={(e) => setNumero_Telefono(parseInt(e.target.value))} />
            <br />

            <label>Seleccione el servidor en el cual va a jugar</label><br />
            <select onChange={(e) => setServidor(e.target.value)} 
                value={server}>
                <option value="Seleccioneunservidor">Seleccione una opcion</option>
                <option value="Las">LAS</option>
                <option value="Lan">LAN</option>
                <option value="Asia">Asia</option>
                <option value="EUW">EUW</option>
                <option value="NA">NA</option>
            </select><br />

            <label>Sexo</label><br />
            <div>
                <input type="radio" name="sexo" value="hombre" onChange={(e) => SetSexo(e.target.value)}></input><label>hombre</label><br />
                <input type="radio" name="sexo" value="Mujer" onChange={(e) => SetSexo(e.target.value)}></input><label>Mujer</label><br />
            </div>
            <button onClick={registrar} type='button'>Registrar</button>
        </form>
    )
}