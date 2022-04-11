import "./Speakers.css";
import { Link } from "react-router-dom";

import ProductsCard from "../../ProductCard/ProductCard";
import CategoryCards from "../../CategoryCards/CategoryCards";
import About from "../../About/About";

const Speakers = ({ speakers, onPorductClick }) => {
  return (
    <section className="speakers">
      <div className="speakers__title-wrap">
        <p className="speakers__title">speakers</p>
      </div>

      <div className="products">
        {speakers.map((card, id) => (
          <ProductsCard key={id} card={card}>
            <Link
              className="product-card__button"
              onClick={() => {
                onPorductClick(card);
              }}
              to="/product"
            >
              See Product
            </Link>
          </ProductsCard>
        ))}
      </div>

      <div className="categories">
        <CategoryCards />
      </div>

      <div className="about">
        <About />
      </div>
    </section>
  );
};
export default Speakers;
