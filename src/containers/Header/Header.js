import React, { useEffect,useState } from "react";

import Button from "../../components/Button/Button";
import BoxyIcon from "../../icons/Boxy/BoxyIcon";
import ShoppingCart from "../../icons/ShoppingCart/ShoppingCart";
import "./Header.scss";

function Header() {
  const [headerBackgrounded, setHeaderBackgrounded] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY > 20) {
      setHeaderBackgrounded(true);
    } else {
      setHeaderBackgrounded(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  },[]  );

  return (
    <div>
      <header
        id="app-header"
        className={`app-header ${
          headerBackgrounded ? "app-header--scrolled" : " "
        }`}
      >
        <div className="BoxIcon">
          <BoxyIcon />
        </div>
        <div className="ShoppingCart">
          <ShoppingCart />
        </div>
        <Button className="btn-header"> Մուտք </Button>
      </header>
    </div>
  );
}
export default Header;
