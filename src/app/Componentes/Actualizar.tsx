import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Persona } from '../Interface/Interfaces';
import { actualizarPersona, obtenerPersona, eliminarPersona } from '../Firebase/Promesas';

export const Actualizar = () => {
    const params = useParams()
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [edad, setEdad] = useState("")
    const [contrasenia, setContrasenia] = useState("")
    const [fecha_nac, setFecha_nacimiento] = useState("")
    const [email, setEmail] = useState("")
    const [n_telefono, setNumero_Telefono] = useState("")
    const [server, setServidor] = useState("")
    const [sexo, SetSexo] = useState("")

    const [errorNombre, setErrorNombre] = useState("")
    const [errorvalidacionNombre, setErrorValidarNombre] = useState("")

    const [errorApellido, setErrorApellido] = useState("")
    const [errorvalidacionApellido, setErrorValidarApellido] = useState("")

    const [errorEdad, setErrorEdad] = useState("")

    const [errorContrasenia, setErrorContrasenia] = useState("")

    const [errorFecha_Nac, setErrorFecha_Nac] = useState("")

    const [errorEmail, setErrorEmail] = useState("")

    const [errorN_Telefono, setErrorN_Telefono] = useState("")

    const [errorServer, setErrorServer] = useState("")

    const [errorSexo, setErrorSexo] = useState("")

    const [idPersona, setIdPersona] = useState("")
    useEffect(() => {
        if (params.idPersona != undefined) {
            obtenerPersona(params.idPersona).then((v) => {
                if (v != undefined && v.idPersona != undefined) {
                    setNombre(v.nombre)
                    setApellido(v.apellido)
                    setEdad("" + v.edad)
                    setContrasenia(v.contrasenia)
                    setFecha_nacimiento(v.contrasenia)
                    setNumero_Telefono("" + v.n_telefono)
                    setEmail(v.email)
                    setServidor(v.server)
                    SetSexo(v.sexo)
                    setIdPersona(v.idPersona)
                }
            })

        }
        //promesas que recuperan el objeto en base a un id
        //carguemos en cada estado su valor
    }, [])


    const actualizar = () => {

        if (nombre.trim() == "") {
            setErrorNombre("No valen espacios en blanco")
        } else {
            setNombre(nombre.trim())
        }
        //Asuman que se valido todo
        const p: Persona = {
            nombre,
            apellido,
            edad: parseInt(edad),
            contrasenia,
            fecha_nac,
            email,
            n_telefono: parseInt(n_telefono),
            server,
            sexo
        }
        //actualizar
        actualizarPersona(idPersona, p).then(() => {
            alert("Se actualizo con exito")
        })
    }
    const validarNombre = (valor: string) => {
        setNombre(valor);
        if (valor.length < 3) {
            setErrorNombre("Debe tener mas de 3 letras")
        }
        else {
            setErrorNombre("")
        }


    }
return (
    <form>
        <label>Nombre: </label><br />
        <input type='text'
            onChange={(e) => validarNombre(e.target.value)}
            value={nombre}
        />
        <span>{errorNombre}</span>
        <span>{errorvalidacionNombre}</span>
        <br />

        <label>Apellido: </label><br />
        <input type='text'
            onChange={(e) => setApellido(e.target.value)}
            value={apellido}
        />
        <span>{errorApellido}</span>
        <span>{errorvalidacionApellido}</span>
        <br />

        <label>Edad: </label><br />
        <input type="number"
            onChange={(e) => setEdad(e.target.value)}
            value={edad}
        /><br />
        <span>{errorEdad}</span>
        <br />

        <label>Contraseña: </label><br />
        <input type="text"
            onChange={(e) => setContrasenia(e.target.value)}
            value={contrasenia}
        /><br />
        <span>{errorContrasenia}</span>
        <br />

        <label>Fecha_Nacimiento: </label><br />
        <input type="Date"
            onChange={(e) => setFecha_nacimiento(e.target.value)}
            value={fecha_nac}
        /><br />
        <span>{errorFecha_Nac}</span>
        <br />

        <label>email</label><br />
        <input type="email" onChange={(e) => setEmail(e.target.value)}
            value={email}
        /><br />
        <span>{errorEmail}</span>
        <br />

        <label>N° Telefono</label><br />
        <input type='tel' onChange={(e) => setNumero_Telefono(e.target.value)}
            value={n_telefono}
        /><br />
        <span>{errorN_Telefono}</span>
        <br />

        <label>Servidor: </label>
        <select
            onChange={(e) => setServidor(e.target.value)}
            value={server}><br />
            <option value="">Seleccione una opcion</option>
            <option value="Las">LAS</option>
            <option value="Lan">LAN</option>
            <option value="Asia">Asia</option>
            <option value="EUW">EUW</option>
            <option value="NA">NA</option>
        </select><br />
        <span>{errorServer}</span>
        <br />

        <label>Sexo:</label><br />
        <span>{errorSexo}</span>
        <div>
            <input type="radio" name="sexo" value="hombre" onChange={(e) => SetSexo(e.target.value)}></input><label>hombre</label><br />
            <input type="radio" name="sexo" value="Mujer" onChange={(e) => SetSexo(e.target.value)}></input><label>Mujer</label><br />
        </div>

        <button type='button' onClick={actualizar}>Actualizar</button>
    </form>
)
}