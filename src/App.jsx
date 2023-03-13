
import './App.css'
import Button from './components/Button'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'

function App() {

  return (

     <div>

      <Navbar icono="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" />

      <h1>My app</h1>
      <ItemListContainer greeting="Hola" />
      <Button texto="Inicio" />
      <Button texto="Discos" />
      <Button texto="Quienes somos" />
     </div> 
   
  ) 
}

export default App
