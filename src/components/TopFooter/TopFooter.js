import React from "react";

import BoxyIcon from "../../icons/Boxy/BoxyIcon";
import Button from "../Button/Button";

import "./TopFooter.scss";

const TopFooter = () => {
  return (
    <div className="app-topFooter">
      <BoxyIcon />
      <p className="topFooter-text">THINK OUT OF THE BOXY</p>
      <Button className="btn-footer"> Առաջարկ ունե՞ս </Button>
    </div>
  );
};

export default TopFooter;
