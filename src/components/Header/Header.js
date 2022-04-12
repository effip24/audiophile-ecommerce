import "./Header.css";

import { useState } from "react";
import { useLocation } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import logo from "../../images/assets/shared/desktop/logo.svg";
import cart from "../../images/assets/shared/desktop/icon-cart.svg";
import mobile from "../../images/assets/shared/tablet/icon-hamburger.svg";

const Header = ({ onCartClick, cartItems }) => {
  const [isMobile, setIsMobile] = useState(false);

  const location = useLocation();

  const isHome = location.pathname === "/";

  const handleMobileClick = () => {
    setIsMobile(!isMobile);
  };

  return (
    <header
      className="header"
      style={{
        backgroundColor: `${isHome && !isMobile ? "transparent" : ""}`,
        position: `${isHome ? "absolute" : "fixed"}`,
      }}
    >
      <div className="header__container">
        <div className="header__inner-container">
          <div className="header__logo-container">
            <div className="header__logo-wrap">
              <img
                className="header__mobile"
                src={mobile}
                alt="mobile icon"
                onClick={handleMobileClick}
              ></img>
              <img className="header__logo" src={logo} alt="logo"></img>
            </div>

            <div className="header__navigation-desktop">
              <Navigation isMobile={isMobile} />
            </div>
          </div>

          <div className="header__cart-wrap">
            <label
              className="header__cart-label"
              style={{ display: `${cartItems < 1 ? "none" : ""}` }}
            >
              {cartItems}
            </label>
            <img
              className="header__cart-icon"
              src={cart}
              alt="cart"
              onClick={onCartClick}
            ></img>
          </div>
        </div>

        <div
          className="header__navigation-mobile"
          style={{ display: `${isMobile ? "flex" : "none"}` }}
        >
          <Navigation isMobile={isMobile} onClose={handleMobileClick} />
        </div>
      </div>
    </header>
  );
};
export default Header;
