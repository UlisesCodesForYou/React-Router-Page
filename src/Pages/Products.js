import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>These are the products</h1>
      <ul>
        <li>
          <Link to="/products/p1">Beige chino</Link>
        </li>
        <li>
          <Link to="/products/p2">Denim jacket</Link>
        </li>
        <li>
          <Link to="/products/p3">Vintage leather thong?</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
