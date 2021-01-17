import React from "react";

import "./Homepage.scss";

import landingTop from "../../assets/landingTop.png";
import Button from "../../components/Button/Button";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-img">
        <img src={landingTop} alt="landingTop"></img>
      </div>

      <div className="homepage-rightColumn">
        <h1 className="homepage-text">
          Ապահովում ենք երջանկություն <br></br>և լավ տրամադրություն<br></br>
          բոլորին և ամենուր
        </h1>
        <Button className="btn-main"> Ստանալ </Button>
      </div>
    </div>
  );
};

export default Homepage;
