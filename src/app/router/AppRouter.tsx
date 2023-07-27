'use client'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Componente1 } from '../Componentes/Componente1'
import { Formulario } from '../Componentes/formulario'
import { Registros } from '../Componentes/Registros'
import { Actualizar } from '../Componentes/Actualizar'
import { Eliminar } from '../Componentes/Eliminar'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={<Componente1 />}/>
        <Route path='/formulario' element={<Formulario />}/>
        <Route path='/registros' element={<Registros />}/>
        <Route path='/actualizar/:idPersona' element={<Actualizar/>}/>
        <Route path='/eliminar/:idPersona' element={<Eliminar/>}/>

    </Routes>
  )
}
