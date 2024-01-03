import React from "react";
import { HeroBanner, Navbar, Cart, FooterBanner } from "@/Components";
import { getProducts } from "@/local_sanity/sanity-utils";
const Home = async () => {
  const products = await getProducts();
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Items</h2>
        <p>Speakers of many variation</p>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <div>{product.name}</div>
        ))}
      </div>
      <FooterBanner />
    </>
  );
};
// export const getServerSideProps = async () => {
//   const query = '*[_type == "product"]';
//   const products = await client.fetch(query);
//   const bannerQuery = '*[_type == "banner"]';
//   const bannerData = await client.fetch(bannerQuery);
//   return {
//     props: {
//       products,
//       bannerData,
//     }, // will be passed to the page component as props
//   };
// };
export default Home;
