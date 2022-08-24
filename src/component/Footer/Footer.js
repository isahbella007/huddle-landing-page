import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AboutUs, ContactUs, iconsDetails, BrandIcon } from "../../constants";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-items">
        <div className="footer-image">
          <img src={logo} alt="pic"></img>
        </div>
        <div className="footer-main-items">
            <div className="footer-details">
                <div className="first-part">
                    {iconsDetails.map((item) => (
                    <div className="location-lorem" key={item.id}>
                        <div className="location-icon">
                            <img src={item.icon} alt = ""></img>
                        </div>
                        <div className="address">
                            <p className="location-text">
                                {item.content}
                            </p>
                        </div>
                    </div>
                    ))}
                </div>
                
                <div className="about-us">
                    {AboutUs.map((item) => (
                        <p className="about-us-text" key={item.id}>{item.content}</p>
                    ))}
                </div>
                <div className="contact-us">
                    {ContactUs.map((item) => (
                        <p className="contact-us-text" key={item.id}>{item.content}</p>
                    ))}
                </div>

                <div className="icon-container">
                    {BrandIcon.map((icons) => (
                        <div className="icon-content" key={icons.id}> 
                            <FontAwesomeIcon icon={icons.icon} className = "icons"></FontAwesomeIcon>
                        </div>
                    ))}
                    
                </div>
                
            </div>
            {/* <div className="copyrights">
                Copyright 2018 Huddle. All rights reserved.
            </div> */}
        </div>
      </div>
    </div>
  );
};
export default Footer;
