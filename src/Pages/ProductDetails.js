import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  console.log(params.productId); // productId comes from here "/product-details/:productId">
  return (
    <section>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetails;
