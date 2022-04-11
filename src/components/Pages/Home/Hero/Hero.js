import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__cover">
        <div className="hero__container">
          <div className="hero__info">
            <p className="hero__subtitle">NEW PRODUCT</p>
            <h1 className="hero__title">XX99 Mark II HeadphoneS</h1>
            <p className="hero__text">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link className="hero__button" to="/headphones">
              See Product
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
