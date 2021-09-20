import React from "react";
import Product from "./Product";

const Shopping = (props) => {
  const { products, addProduct } = props;
  return (
    <main>
      <h1>Products</h1>
      <div>
        {products.map((product) => {
          return <Product key={product.id} product={product} addProduct = {addProduct}></Product>;
        })}
      </div>
    </main>
  );
};

export default Shopping;
