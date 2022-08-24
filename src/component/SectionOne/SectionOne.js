import React from "react";
import logo from "../../assets/images/logo.svg";
import mockUp from "../../assets/images/illustration-mockups.svg";
import { header } from "../../constants/index";
import "./SectionOne.css";
const SectionOne = () => {
  return (
    <div className="section-one-container">
      <div className="section-one-header">
        <div className="header-image">
          <img src={logo} alt="Huddle"></img>
        </div>
        <div className="header-button">
          <button>
            <p>Try it Free</p>
          </button>
        </div>
      </div>
      <div className="header-content">
        {header.map((text) => (
            <div className="header-text" key={text.id}>
                <div className="text-header">
                    <h1>{text.headerText}</h1>
                </div>
                <div className="text">
                    <p>{text.headerBody}</p>
                </div>
                <div className="text-button">
                    <button>
                        <p>
                            {text.headerButton}
                        </p>
                    </button>
                </div>
            </div>
        ))}
        
        <div className=" build-image-container">
          <img src={mockUp} alt = ""></img>
        </div>
      </div>
    </div>
  );
};
export default SectionOne;
