import "./Footer.css";

import Navigation from "../Navigation/Navigation";
import logo from "../../images/assets/shared/desktop/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__navigation-wrap">
          <img className="footer__logo" src={logo} alt="logo"></img>
          <Navigation />
        </div>

        <div className="footer__about-wrap">
          <p className="footer__text">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>

          <ul className="footer__social-list">
            <li className="footer__social-item">
              <i className="footer__social-icon footer__social-icon_type_fb"></i>
            </li>

            <li className="footer__social-item">
              <i className="footer__social-icon footer__social-icon_type_twitter "></i>
            </li>

            <li className="footer__social-item">
              <i className="footer__social-icon footer__social-icon_type_ig"></i>
            </li>
          </ul>
        </div>

        <p className="footer__copyrights">
          Copyright 2022. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
