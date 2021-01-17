import React from "react";

import BottomFooter from "../../components/BottomFooter/BottomFooter";
import TopFooter from "../../components/TopFooter/TopFooter";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="app-footer">
      <TopFooter />
      <BottomFooter />
    </div>
  );
};

export default Footer;
