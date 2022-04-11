import "./Headphones.css";
import { Link } from "react-router-dom";

import ProductsCard from "../../ProductCard/ProductCard";
import CategoryCards from "../../CategoryCards/CategoryCards";
import About from "../../About/About";

const Headphones = ({ headphones, onPorductClick }) => {
  return (
    <section className="headphones">
      <div className="headphones__title-wrap">
        <p className="headphones__title">HEADPHONES</p>
      </div>

      <div className="products">
        {headphones.map((card, id) => (
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
export default Headphones;
