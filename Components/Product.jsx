import React from "react";
import Link from "next/link";
const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div className="">
      <Link href={`/product/${slug}`}>
        <div className="product-card">
          <img src={image} alt="" width={250} height={250} />
        </div>
      </Link>
    </div>
  );
};

export default Product;
