import React from "react";
import { HeroBanner, Navbar, Cart, FooterBanner, Product } from "@/Components";
import { getProducts } from "@/local_sanity/sanity-utils";
const Home = async () => {
  const { products, banner } = await getProducts();
  return (
    <>
      <HeroBanner data={banner.length && banner[0]} />
      <div className="products-heading">
        <h2>Best Selling Items</h2>
        <p>Speakers of many variation</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={banner && banner[0]} />
    </>
  );
};
export default Home;
