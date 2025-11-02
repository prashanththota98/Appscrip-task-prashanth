import React from "react";
import { CiHeart } from "react-icons/ci";
import "./index.css";

function ProductCard({ product }) {
  return (
    <li className="productItem">
      <img src={product.image} alt={product.title} className="productImage" />
      <div className="titleFavouriteContainer">
        <h1 className="productTitle">{product.title}</h1>
        <CiHeart className="favouriteIcon" />
      </div>

      <p className="productDescription">
        <span className="productDescSpan">Sign in </span>
        or Create an account to see pricing
      </p>
    </li>
  );
}

export default ProductCard;
