import React from "react";
import Link from "next/link";
const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div className="">
      <Link href={`/product/${slug}`}>
        <div className="product-card">
          <img
            src={image && image[0]}
            alt=""
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">{price} $</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
