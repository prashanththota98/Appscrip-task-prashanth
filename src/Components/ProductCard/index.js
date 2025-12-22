import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import "./index.css";

function ProductCard({ product }) {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <li className="productItem">
      <img
        src={product.images[0]}
        alt={product.title}
        className="productImage"
      />

      <div className="titleFavouriteContainer">
        <h1 className="productTitle">{product.title}</h1>

        <button
          className="favouriteButton"
          onClick={() => setIsFavourite(!isFavourite)}
        >
          {isFavourite ? (
            <FaHeart className="favouriteIcon active" />
          ) : (
            <CiHeart className="favouriteIcon" />
          )}
        </button>
      </div>

      <p className="productDescription">
        <span className="productDescSpan">Sign in </span>
        or create an account to see pricing
      </p>
    </li>
  );
}

export default ProductCard;
