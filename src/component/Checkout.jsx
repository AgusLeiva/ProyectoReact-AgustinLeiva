import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
const Checkout = () => {
  // Realizar la compra y manejar cualquier error
  try {
    // Lógica de compra aquí
    toast.success('¡Compra realizada exitosamente!');
  } catch (error) {
    toast.error('Error al realizar la compra. Intente de nuevo más tarde.');
  }
  return(
    <div>
      <h1>Gracias por su compra</h1>
      <NavLink to="/">
                  Volver al menu
      </NavLink>
    </div>
  )
}
  
 

export default Checkout
