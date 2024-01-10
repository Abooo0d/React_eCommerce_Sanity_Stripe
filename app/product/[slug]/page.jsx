import React from "react";
import { client, getDetails } from "@/local_sanity/sanity-utils";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { Product } from "@/Components";
import DetailsImage from "@/Components/DetailsImage";
const ProductDetails = async ({ params }) => {
  let index = 0;
  const slug = params.slug;
  console.log(slug);
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
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details:</h4>
          <p>{details}</p>
          <p className="price">{price}</p>
          <div className="quantity">
            <h3> Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus">
                <AiOutlineMinus />
              </span>
              <span className="num">0</span>
              <span className="plus">
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart">
              Add To Cart
            </button>
            <button type="button" className="buy-now">
              Buy Now
            </button>
          </div>
        </div>
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
