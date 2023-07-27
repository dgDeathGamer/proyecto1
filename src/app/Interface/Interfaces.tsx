export interface Persona{
    nombre:string,
    apellido:string,
    edad:number,
    contrasenia:string,
    //fecha_nac:Date,
    idPersona?:string, //esto es para que sea opcional la id en una persona.
}