import Componente1 from './Componentes'
import Formulario from './formulario'

export default function Home() {
  return (
    <>
      <p>hola mundo</p>
      <p>Chao mundo</p>
      <Componente1 nombre="Jose" apellido="Parada"></Componente1>

      <Componente1 nombre="Gabriel"/>

      <Formulario></Formulario>
    </>
  )
}
