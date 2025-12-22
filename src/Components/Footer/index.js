import React, { useState } from "react";
import { FaChevronDown, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import "./index.css";

function Footer() {
  const [isMettaMuseOpen, setMettaMuseOpen] = useState(false);
  const [isQuickLinksOpen, setQuickLinks] = useState(false);
  const [isFollowUsOpen, setFollowUs] = useState(false);

  const mettaMuseLinks = [
    "About Us",
    "Stories",
    "Artisans",
    "Boutiques",
    "Contact Us",
    "EU Compliances Docs",
  ];

  const quickLinks = [
    "Orders & Shopping",
    "Payment & Pricing",
    "Return & Refunds",
    "FAQs",
    "Privacy Policy",
    "Terms & Conditions",
  ];

  const paymentPartners = [
    "https://res.cloudinary.com/dn2qzuhss/image/upload/v1762009296/Group_136187_mzvyt9.png",
    "https://res.cloudinary.com/dn2qzuhss/image/upload/v1762009283/Group_136189_juci4j.png",
    "https://res.cloudinary.com/dn2qzuhss/image/upload/v1762009248/Group_136191_ypztxb.png",
    "https://res.cloudinary.com/dn2qzuhss/image/upload/v1762009234/Vector_nlc6xy.png",
    "https://res.cloudinary.com/dn2qzuhss/image/upload/v1762009223/Group_c5sbdw.png",
    "https://res.cloudinary.com/dn2qzuhss/image/upload/v1762009380/Vector_mt5y1b.png",
  ];

  const toggleMettaMuse = () => {
    setMettaMuseOpen((prevState) => !prevState);
  };

  const toggleQuickLinks = () => {
    setQuickLinks((prevState) => !prevState);
  };

  const toggleFollowUp = () => {
    setFollowUs((prevState) => !prevState);
  };

  return (
    <div className="footer">
      {/* Subscription Section */}
      <section className="lgTopMain">
        <section className="subscription">
          <h1 className="headingFooter">Be the first to know</h1>
          <p className="descriptionFooter">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. This is simply dummy text.
          </p>
          <p className="paraforlargedesc">
            Sign up for updates from mettā muse.
          </p>
          <input
            type="text"
            className="inputEmail"
            placeholder="Enter your e-mail..."
          />
          <button type="button" className="subscribeButton">
            Subscribe
          </button>
        </section>
        <div className="line" />
        <section>
          {/* Call Us Section */}
          <section className="callUs">
            <h1 className="headingFooter">Call Us</h1>
            <div className="contactDetailsContainer">
              <p className="contactNumber">+44 221 133 5360</p>
              <img
                src="https://res.cloudinary.com/dn2qzuhss/image/upload/v1762010864/Star_1_mtj7b3.png"
                alt="star"
                className="star"
              />
              <p className="email">customercare@mettamuse.com</p>
            </div>
          </section>

          <div className="line" />

          {/* Currency Section */}
          <section className="currency">
            <h1 className="headingFooter">CURRENCY</h1>
            <div className="currencyContainer">
              <img
                src="https://res.cloudinary.com/dn2qzuhss/image/upload/v1762010592/United_States_of_America_US_iczuee.png"
                alt="flag"
                className="flag"
              />
              <img
                src="https://res.cloudinary.com/dn2qzuhss/image/upload/v1762010864/Star_1_mtj7b3.png"
                alt="star"
              />
              <p style={{ color: "#ffffff", marginLeft: "10px" }}>USD</p>
            </div>
            <p className="instructionsOnPayment">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </section>
          <div className="line" />
        </section>
      </section>

      <div className="linelg" />
      {/* Metta Muse Section */}
      <section className="lgTopMain">
        <section className="mettaMuseSection">
          <div className="dropdownContainer" onClick={toggleMettaMuse}>
            <span className="mettaMuseHead">mettā muse</span>
            <FaChevronDown
              size={24}
              className={`arrow ${isMettaMuseOpen ? "rotated" : ""}`}
            />
          </div>

          <ul
            className={`dropdownList ${isMettaMuseOpen ? "show-on-small" : ""}`}
          >
            {mettaMuseLinks.map((link, index) => (
              <li key={index} className="dropdownItem">
                {link}
              </li>
            ))}
          </ul>
        </section>

        <div className="line" />
        {/* Quick Links */}
        <section className="mettaMuseSection">
          <div className="dropdownContainer" onClick={toggleQuickLinks}>
            <span className="mettaMuseHead">QUICK LINKS</span>
            <FaChevronDown
              size={24}
              className={`arrow ${isQuickLinksOpen ? "rotated" : ""}`}
            />
          </div>

          <ul
            className={`dropdownList ${
              isQuickLinksOpen ? "show-on-small" : ""
            }`}
          >
            {quickLinks.map((link, index) => (
              <li key={index} className="dropdownItem">
                {link}
              </li>
            ))}
          </ul>
        </section>

        <div className="line" />

        <div className="subbottom">
          {/* Follow Us */}
          <section className="mettaMuseSection">
            <div className="dropdownContainer" onClick={toggleFollowUp}>
              <span className="mettaMuseHead">FOLLOW UP</span>
              <FaChevronDown
                size={24}
                className={`arrow ${isFollowUsOpen ? "rotated" : ""}`}
              />
            </div>

            <div
              className={`followupContainer ${
                isFollowUsOpen ? "show-on-small" : ""
              }`}
            >
              <RiInstagramFill className="followup-icons" />
              <FaLinkedin className="followup-icons" />
            </div>
          </section>

          <div className="line" />
          {/* Payment Partners */}
          <section className="aboutPayment">
            <h1>
              mettā muse <span>ACCEPTS</span>
            </h1>
            <ul className="paymentListContainer">
              {paymentPartners.map((payment, index) => (
                <li
                  key={index}
                  className={`listItemPayment ${
                    index === 3
                      ? "backgroundFourth"
                      : index === 5
                      ? "backgroundSixth"
                      : ""
                  }`}
                >
                  <img src={payment} alt="payment" />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      <p className="copyRight">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
