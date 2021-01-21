import React from "react";

import IconIn from "../../assets/instagram.svg";
import IconFb from "../../assets/facebook.svg";

import "./SocialIcon.scss";

const SocialIcon = () => {
  return (
    <div>
      <a href="facebook.com">
        <img alt="socialIcon" src={IconFb} className="fbIconStyle" />
      </a>
      <a href="instagram.com">
        <img alt="socialIcon" src={IconIn} className="inIconStyle" />
      </a>
    </div>
  );
};

export default SocialIcon;
