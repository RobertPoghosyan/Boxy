import React from "react";

import Product from "../../components/Product/Product";
import { productsData } from "../../data-mockup/products-mockup";

import "./Products.scss";

const Products = () => {
  return (
    <div className="products">
      {productsData.map((el) => {
        return (
          <Product
            key={el.id}
            imgSrc={el.imgSrc}
            title={el.title}
            price={el.price}
          />
        );
      })}

      <div className="app-about">
        <p className="product-p">Ի՞նչ է Boxy-ն</p>
        <p>
          {" "}
          Boxy-ն գաղտնի հավաքված նվեր տուփ է,որի պարունակությունը որոշվում է Ձեզ
          մի քանի հարցեր տալուց և Ձեր նախասիրությունները պարզելուց հետո։
          Հետաքրքիր, զարմանալի, հաճելի ու բոլորովին անսպասելի նվեր Ձեր
          մտերիմներին ու սիրելիներին: Boxy-ն կազատի Ձեզ նվեր ընտրելու բարդ
          գործընթացից և, ինչու ոչ, կընդգծի Ձեր յուրօրինակությունը: Իսկ թե ինչ
          կլինի Ձեր բոքսում կիմանաք միայն այն բացելուց հետո:
        </p>
      </div>
    </div>
  );
};

export default Products;
