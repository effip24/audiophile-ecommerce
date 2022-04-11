import "./Product.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import ProductsCard from "../../ProductCard/ProductCard";
import CategoryCards from "../../CategoryCards/CategoryCards";
import About from "../../About/About";

import { imagePath, animateCart } from "../../../utils/utils";

const Product = ({ product, onAddToCart }) => {
  const [amount, setAmount] = useState(1);

  let firstFileName = imagePath(product.gallery.first);
  let secondFileName = imagePath(product.gallery.second);
  let thirdFileName = imagePath(product.gallery.third);

  let history = useHistory();

  const handleIncrease = () => {
    setAmount(amount + 1);
  };

  const handleDecrease = () => {
    if (amount - 1 <= 0) return;
    setAmount(amount - 1);
  };

  const handleAddToCart = () => {
    onAddToCart({
      id: product.id,
      image: product.categoryImage.mobile,
      name: product.name,
      total: amount * product.price,
      amount: amount,
      price: product.price,
    });

    setAmount(1);
    animateCart();
  };

  return (
    <section className="product">
      <div className="product__container">
        <label className="product__back" onClick={history.goBack}>
          Go Back
        </label>

        <ProductsCard card={product}>
          <div className="product__cart-container">
            <p className="product__price">{`$ ${product.price}`}</p>

            <div className="product__add-container">
              <div className="product__amount-wrap">
                <label
                  className="product__amount-control"
                  onClick={handleDecrease}
                >
                  -
                </label>
                <label className="product__amount">{amount}</label>
                <label
                  className="product__amount-control"
                  onClick={handleIncrease}
                >
                  +
                </label>
              </div>

              <button className="product__add" onClick={handleAddToCart}>
                add to cart
              </button>
            </div>
          </div>
        </ProductsCard>

        <div className="product__info-wrap">
          <div className="product__features">
            <p className="product__features-title">FEATURES</p>
            <p className="product__features-text">{product.features}</p>
          </div>

          <div className="product__box">
            <p className="product__features-title">in the box</p>
            <ul className="product__box-list">
              {product.includes.map((item, key) => (
                <li className="product__box-item" key={key}>
                  <p className="product__box-quantity">{item.quantity}x</p>
                  <label className="product__box-item-name">{item.item}</label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="product__gallery">
          <img
            className="product__gallery-img"
            src={require("../../../images" + firstFileName + ".jpg")}
            alt="gallery image"
          ></img>

          <img
            className="product__gallery-img"
            src={require("../../../images" + secondFileName + ".jpg")}
            alt="gallery image"
          ></img>

          <img
            className="product__gallery-img"
            src={require("../../../images" + thirdFileName + ".jpg")}
            alt="gallery image"
          ></img>
        </div>

        <div className="categories">
          <CategoryCards />
        </div>

        <div className="about">
          <About />
        </div>
      </div>
    </section>
  );
};
export default Product;
