import "./Home.css";

import { Link } from "react-router-dom";

import Hero from "./Hero/Hero";
import CategoryCards from "../../CategoryCards/CategoryCards";
import About from "../../About/About";

const Home = () => {
  return (
    <section className="home">
      <Hero />

      <div className="categories">
        <CategoryCards />
      </div>

      <div className="feature">
        <div className="feature__speaker-zx-nine">
          <div className="feature__speaker-zx-nine-cover"></div>
          <div className="feature__speaker-zx-nine-img"></div>
          <div className="feature__speaker-info">
            <p className="feature__speaker-zx-nine-title">ZX9 SPEAKER</p>
            <p className="feature__speaker-zx-nine-text">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link className="feature__speaker-zx-nine-button" to="/speakers">
              See Product
            </Link>
          </div>
        </div>

        <div className="feature__speaker-zx-seven">
          <div className="feature__speaker-zx-seven-info">
            <p className="feature__speaker-zx-seven-title">ZX7 SPEAKER</p>
            <Link className="feature__speaker-zx-seven-button" to="/speakers">
              See Product
            </Link>
          </div>
        </div>
      </div>

      <div className="about">
        <About />
      </div>
    </section>
  );
};
export default Home;
