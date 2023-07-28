'use client'
import React from 'react'
import "../assets/css/Componente1.css" //recordar que todo se carga en la misma página, por lo cual se compartira el css
interface Props{
  nombre?:string,
  apellido?:string
} //el '?' se pone cuando es opcional
export const Componente1 = (props:Props) => {
  return (
    <div>
      <h2>Terraria</h2>
      <div>
        <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/105600/ss_8c03886f214d2108cafca13845533eaa3d87d83f.jpg" alt="terrariamg" width={800}/>
      </div>
    </div>
  )
}
