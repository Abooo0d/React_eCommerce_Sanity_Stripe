import React from "react";
import { getDetails } from "@/local_sanity/sanity-utils";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { Product, ProductDetailsDesc } from "@/Components";
import DetailsImage from "@/Components/DetailsImage";
const ProductDetails = async ({ params }) => {
  const slug = params.slug;
  const { productDetails, allProducts } = await getDetails(slug);
  const { image, name, details, price } = productDetails;
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="small-images-container">
            <DetailsImage images={image} />
          </div>
        </div>
        <ProductDetailsDesc name={name} price={price} details={details} />
      </div>
      <div className="maylike-products-wrapper ">
        <h2>You Mak Also Like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {allProducts.length > 0 &&
              allProducts?.map((product, index) => (
                <Product key={index} product={product} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
