import React from "react";
import { useFilterContext } from "../context/filter_context";
// import { useProductsContext } from "../context/products_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  // const { products } = useProductsContext();
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched your search...
      </h5>
    );
  }
  if (grid_view === false) {
    console.log(products);
    return <ListView products={products} />;
  }
  console.log(products);
  return <GridView products={products} />;
};

export default ProductList;
