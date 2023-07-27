'use client'
import {Componente1} from './Componentes/Componente1'
import {Formulario} from './Componentes/formulario'
import { Header } from './layout/Header'
import { AppRouter } from './router/AppRouter'
import { Footer } from './layout/Footer'

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
//agregar más cositas dentro del BrowserRouter.
//en vez de LocalStorage, reemplazarlo por FireBase
//agregar más cosas en el Header (formulario, registros, etc)
//3 pasos para crear más cosas en el header, en Componentes crear un archivo.
//Dentro del archivo poner rafc
//Dentro de Header poner <Link to={""}></Link>
//y luego en AppRouter poner <Route path='/' element={< />}/>
//cambiar los class en classname