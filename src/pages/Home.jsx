import React from "react";
import HeroSlider from "../components/hero-slider/HeroSlider";
import ProductList from "../components/product-list/ProductList";

const Home = () => {
  return (
    <div>
      <HeroSlider />

      <hr />
      <ProductList categoryName="category" bannerName="categoryBanners"/>
      <ProductList categoryName="seller" bannerName="sellerBanners"/>

    </div>
  );
};

export default Home;
