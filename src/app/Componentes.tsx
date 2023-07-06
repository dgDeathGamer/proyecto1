import React from 'react'
import "../app/assets/css/Componente1.css" //recordar que todo se carga en la misma página, por lo cual se compartira el css
interface Props{
  nombre?:String,
  apellido?:String
} //el '?' se pone cuando es opcional
export const Componente1 = (props:Props) => {
  return (
    <div className='componente1-fondo'>
      <p>holaaaa {props.nombre} {props.apellido}</p>
      <p>Chaoooo</p>
    </div>
  )
}
