'use client'
import {Componente1} from './Componentes/Componente1'
import {Formulario} from './Componentes/formulario'
import { Header } from './Componentes/Header'
import { AppRouter } from './router/AppRouter'
import { Footer } from './Componentes/Footer'

import {BrowserRouter} from 'react-router-dom'
export default function Home() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
    </>
  )
}
