export interface Persona{
    nombre:string,
    apellido:string,
    edad:number,
    contrasenia:string,
    fecha_nac:string,
    email:string,
    n_telefono:number,
    server:string,
    sexo:string,
    idPersona?:string, //esto es para que sea opcional la id en una persona.
}