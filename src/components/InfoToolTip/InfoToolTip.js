import "./InfoToolTip.css";
import { Link } from "react-router-dom";

import success from "../../images/assets/shared/success.png";

const InfoToolTip = ({ isOpen, order, onBack }) => {
  const image = order.products[0]?.image.substring(
    1,
    order.products[0]?.image.length - 4
  );

  return (
    <div className={`info ${isOpen ? "info_open" : ""}`}>
      <div className="info__container">
        <img className="info__img" src={success} alt="success"></img>

        <p className="info__title">THANK YOU FOR YOUR ORDER</p>

        <p className="info__subtitle">
          You will receive an email confirmation shortly.
        </p>

        <div className="info__summary">
          <div className="info__product-wrap">
            {order.products[0] ? (
              <div className="info__item">
                <div className="info__item-info">
                  <img
                    className="info__image"
                    src={require("../../images" + image + ".jpg")}
                    alt="product"
                  ></img>

                  <div className="info__info-wrap">
                    <p className="info__item-name">{order.products[0].name}</p>
                    <p className="info__item-price">{`$ ${order.products[0].price}`}</p>
                  </div>
                </div>

                <label
                  className={`info__amount`}
                >{`x${order.products[0].amount}`}</label>
              </div>
            ) : (
              ""
            )}

            <p className="info__product-rest">{`and ${
              order.products.length - 1
            } other item(s)`}</p>
          </div>

          <div className="info__grand-total">
            <p className="info__grand-title">GRAND TOTAL</p>
            <p className="info__total">{`$ ${order.grandTotal}`}</p>
          </div>
        </div>

        <Link className="info__back-button" to="/" onClick={onBack}>
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
};
export default InfoToolTip;
