import "./CategoryCards.css";
import { Link } from "react-router-dom";

const CategoryCards = () => {
  return (
    <section className="category-cards">
      <ul className="category-cards__cards-list">
        <li className="category-cards__cards-item">
          <div className="category-cards__card-img category-cards__card-img_type_headphones"></div>
          <p className="category-cards__card-title">HEADPHONES</p>

          <Link className="category-cards__card-link-wrap" to="/headphones">
            <label className="category-cards__card-link-label">SHOP</label>
            <i className="category-cards__card-link-icon"></i>
          </Link>
        </li>

        <li className="category-cards__cards-item">
          <div className="category-cards__card-img category-cards__card-img_type_speakers"></div>
          <p className="category-cards__card-title">SPEAKERS</p>

          <Link className="category-cards__card-link-wrap" to="/speakers">
            <label className="category-cards__card-link-label">SHOP</label>
            <i className="category-cards__card-link-icon"></i>
          </Link>
        </li>

        <li className="category-cards__cards-item">
          <div className="category-cards__card-img category-cards__card-img_type_earphones"></div>
          <p className="category-cards__card-title">EARPHONES</p>

          <Link className="category-cards__card-link-wrap" to="/earphones">
            <label className="category-cards__card-link-label">SHOP</label>
            <i className="category-cards__card-link-icon"></i>
          </Link>
        </li>
      </ul>
    </section>
  );
};
export default CategoryCards;
