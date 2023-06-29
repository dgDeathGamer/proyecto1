import React from 'react'
interface Props{
  nombre?:String,
  apellido?:String
}
export const Componente1 = (props:Props) => {
  return (
    <div>
      <p>holaaaa {props.nombre} {props.apellido}</p>
      <p>Chaoooo</p>
    </div>
  )
}
