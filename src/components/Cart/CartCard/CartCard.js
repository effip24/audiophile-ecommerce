import "./CartCard.css";

import { animateRemoveFromCart } from "../../../utils/utils";

const CartCard = ({ card, onCartUpdate, onRemove, isSummary }) => {
  const image = card.image.substring(1, card.image.length - 4);

  const handleIncrease = () => {
    card.amount += 1;

    onCartUpdate(card);
  };

  const handleDecrease = () => {
    if (card.amount - 1 > 0) {
      card.amount -= 1;

      onCartUpdate(card);
    } else {
      animateRemoveFromCart();

      setTimeout(() => {
        onRemove(card);
      }, 300);
    }
  };

  return (
    <li className="cart-card__item">
      <div className="cart-card__item-info">
        <img
          className="cart-card__image"
          src={require("../../../images" + image + ".jpg")}
          alt="product"
        ></img>

        <div className="cart-card__info-wrap">
          <p className="cart-card__item-name">{card.name}</p>
          <p className="cart-card__item-price">{`$ ${card.price}`}</p>
        </div>
      </div>

      {isSummary ? (
        <label
          className={`cart-card__amount ${
            isSummary ? "cart-card__amount_type_summary" : ""
          }`}
        >{`x${card.amount}`}</label>
      ) : (
        <div className="cart-card__amount-wrap">
          <label className="cart-card__amount-control" onClick={handleDecrease}>
            -
          </label>
          <label className="cart-card__amount">{card.amount}</label>
          <label className="cart-card__amount-control" onClick={handleIncrease}>
            +
          </label>
        </div>
      )}
    </li>
  );
};
export default CartCard;
