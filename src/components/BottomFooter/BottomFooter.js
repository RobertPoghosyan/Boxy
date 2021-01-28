import React from "react";

import SocialIcon from "../../icons/SocialIcons/SocialIcon";

import "./BottomFooter.scss";

const BottomFooter = () => {
  return (
    <div className="app-bottom-footer">
      <div className="footer-contacts">
        <p className="footer-contacts_title"> Հետադարձ կապ </p>
        <span className="footer-contacts_email"> Էլ․ հասցե՝ info@boxy.am </span>
        <div className="footer-contacts_tel">
          Հեռ․՝
          <a
            href="https://boxy.am/tel:+374-41-05-11-50"
            className="footer-contacts_tel_link"
          >
            +374 41 05-11-50
          </a>
        </div>
      </div>
      <div className="footer-services">
        <p className="footer-services_text"> Սպասարկում </p>
        <a className="footer-services-link" href="https://boxy.am/faq">
          Հաճախ տրվող հարցեր
        </a>
        <a
          className="footer-services-link"
          href="https://boxy.am/return-policy"
        >
          Վերադարձի պայմաններ
        </a>

        <a className="footer-services-link" href="https://boxy.am/terms-of-use">
          Օգտվելու կանոններ
        </a>
        <a
          className="footer-services-link"
          href="https://boxy.am/terms-of-delivery"
        >
          Առաքման պայմաններ
        </a>
      </div>
      <div className="footer-social">
        <p className="footer-social_text"> Գտիր մեզ սոց.ցանցերում </p>
        <p>
          <SocialIcon />
        </p>
      </div>
    </div>
  );
};

export default BottomFooter;
