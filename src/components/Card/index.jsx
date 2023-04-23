import { Link } from "react-router-dom";
import styles from "./card.module.css"

const Card = ({ producto }) => {
  return (
    <Link to={`${producto.id}`}>
      <div className={styles.container}>
        <h3>{producto.title}</h3>
        <img
          src={producto.image}
          alt={producto.title}
          width="200"
          height="250"
        />
        <p>{producto.description}</p>
        <p>$ {producto.price}</p>
        <button onClick={() => addToCart(props)}>Agregar Carrito</button>
      </div>
    </Link>
  );
  function Product(props) {
    const { name, price, addToCart } = props;
  
    return (
      <div>
        <h2>{name}</h2>
        <p>{price}</p>
        <button onClick={() => addToCart(props)}>Agregar al carrito</button>
      </div>
    );
  }
  
  function ProductList(props) {
    const { products, addToCart } = props;
  
    return (
      <div>
        {products.map(product => (
          <Product key={product.id} name={product.name} price={product.price} addToCart={() => addToCart(product)} />
        ))}
      </div>
    );
  }
  
};

export default Card;