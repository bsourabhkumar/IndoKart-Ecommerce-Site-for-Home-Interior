import React from "react";
import FeaturedCategories from "../components/FeaturedCategories";

import FeaturedProducts from "../components/FeaturedProducts";
// import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <main style={{marginRight: "0"}}>
      {/* <Hero /> */}
      <FeaturedProducts />
     <FeaturedCategories />
      {/* <Services /> */}
      {/* <Contact /> */}
    </main>
  );
};

export default HomePage;
