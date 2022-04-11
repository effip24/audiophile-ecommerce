import "./Earphones.css";
import { Link } from "react-router-dom";

import ProductsCard from "../../ProductCard/ProductCard";
import CategoryCards from "../../CategoryCards/CategoryCards";
import About from "../../About/About";

const Earphones = ({ earphones, onPorductClick }) => {
  return (
    <section className="earphones">
      <div className="earphones__title-wrap">
        <p className="earphones__title">earphones</p>
      </div>

      <div className="products">
        {earphones.map((card, id) => (
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
export default Earphones;
