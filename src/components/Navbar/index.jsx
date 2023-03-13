import styles from "./navbar.module.scss"

const Navbar  = ({icono }) => {
  return (
    <nav className={styles.container_nav}>
    <p>Inicio</p>
    <p>Discos</p>
    <p>Quienes somos</p>
    <img src={icono} alt="" width="40" height="40" />
    <p>2</p>
  </nav>
  )
}

export default Navbar 