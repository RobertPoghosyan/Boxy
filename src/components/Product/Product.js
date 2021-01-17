import React from "react";

import "./Product.scss";

const Product = ({ imgSrc, title, price }) => {
  return (
    <div className="product">
      <div className="product-img">
        <img src={imgSrc} alt="" className="boxy-img"></img>
        <div className="product-price">
          <p>{price}</p>
        </div>
      </div>

      <p className="product-title">{title}</p>
    </div>
  );
};

export default Product;
