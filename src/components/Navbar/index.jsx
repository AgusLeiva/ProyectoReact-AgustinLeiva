import styles from "./navbar.module.css"
import { NavLink } from "react-router-dom";

const Navbar  = ({icono}) => {

  const activeStyle = {
    color: "red",
  };
  
  return (
    <nav className={styles.container_nav}>
      
      <NavLink>
      <img src={icono} alt="" width="150" height="50" />
          
          

      </NavLink>

      <NavLink
        to="/home"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>Inicio</p>
      </NavLink>
      <NavLink
        to="/products"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>Productos </p>
      </NavLink>
      <NavLink
        to="/cart"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
      <img src= "https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="" width="50" height="50" />
      </NavLink>
    </nav>
  );
}

export default Navbar 