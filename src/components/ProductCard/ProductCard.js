import { useEffect } from "react";
import "./ProductCard.css";

import { imagePath } from "../../utils/utils";

const ProductCard = ({ card, children }) => {
  let path = imagePath(card.categoryImage);

  return (
    <section className="product-card">
      <img
        className="product_card__img"
        src={require("../../images" + path + ".jpg")}
      ></img>
      <div className="product-card__info">
        <p className="product-card__name">{`${card.name} Headphones`}</p>
        <p className="product-card__description">{card.description}</p>

        {children}
      </div>
    </section>
  );
};
export default ProductCard;
