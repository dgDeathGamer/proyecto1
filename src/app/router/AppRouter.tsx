'use client'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Componente1 } from '../Componentes/Componente1'
import { Formulario } from '../Componentes/formulario'
import { Registros } from '../Componentes/Registros'
import { Actualizar } from '../Componentes/Actualizar'
import { Terraria } from '../Componentes/Terraria'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={<Componente1 />}/>
        <Route path='/formulario' element={<Formulario />}/>
        <Route path='/registros' element={<Registros />}/>
        <Route path='/terraria' element={<Terraria/>}/>
        <Route path='/actualizar/:idPersona' element={<Actualizar/>}/>

    </Routes>
  )
}
