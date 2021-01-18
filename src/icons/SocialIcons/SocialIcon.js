import React from 'react';

import IconIn from "../../assets/instagram.svg";
import IconFb from "../../assets/facebook.svg";
import "./SocialIcon.scss";

const SocialIcon = () => {
  return (
    <div>
      <a>
        <img src={IconFb} className="fbIconStyle" />
      </a>
      <a>
        <img src={IconIn} className="inIconStyle" />
      </a>
    </div>
  )
}

export default SocialIcon;