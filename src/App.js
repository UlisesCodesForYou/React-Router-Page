import { Route } from "react-router-dom";

import Welcome from "./Pages/Welcome";
import Products from "./Pages/Products";
import MainHeader from "./Components/MainHeader";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product-details/:productId">
          <ProductDetails />
        </Route>
      </main>
    </div>
  );
}

export default App;
