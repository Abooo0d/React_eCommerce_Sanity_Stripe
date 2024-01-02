import React from "react";

const Home = () => {
  return (
    <>
      HeroBanner
      <div className="products-heading">
        <h2>Best Selling Items</h2>
        <p>Speakers of many variation</p>
      </div>
      <div className="products-container">
        {["product 1", "product 2", "product 3"].map((product) => product)}
      </div>
    </>
  );
};

export default Home;
