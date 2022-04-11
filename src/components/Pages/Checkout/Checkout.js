import "./Checkout.css";
import { useEffect, useState } from "react";

import Cart from "../../Cart/Cart";
import Billing from "./Billing/Billing";
import Shipping from "./Shipping/Shipping";
import Payment from "./Payment/Payment";

import { vatCalculator } from "../../../utils/utils";
import useFormAndValidation from "../../../utils/useFormAndValidation";

const Checkout = ({ cart, totalPrice, onPayment }) => {
  const { values, handleChange, errors, isValid, resetForm, setValues } =
    useFormAndValidation();

  const [isEmoneyPayment, setIsEmoneyPayment] = useState(false);
  const [isCashPayment, setIsCashPayment] = useState(false);

  const shippingPrice = cart.length ? 50 : 0;
  const grandTotal = vatCalculator(totalPrice) + shippingPrice + totalPrice;

  useEffect(() => {
    resetForm();
    setValues({});
  }, []);

  const handleEmoneyPaymentClick = () => {
    setIsEmoneyPayment(true);
    setIsCashPayment(false);
  };

  const handleCashPaymentClick = () => {
    setIsEmoneyPayment(false);
    setIsCashPayment(true);
  };

  const handlePayment = () => {
    onPayment({
      orderInfo: values,
      products: cart,
      total: totalPrice,
      shipping: shippingPrice,
      grandTotal: grandTotal,
      paymentMethod: isCashPayment
        ? "cash"
        : {
            eMoney: {
              emoneyNumber: values.emoneyNumber,
              emoneyPin: values.emoneyPin,
            },
          },
    });
  };

  return (
    <section className="checkout">
      <div className="checkout__container">
        <form className="checkout__form">
          <p className="checkout__title">Checkout</p>

          <Billing
            values={values}
            errors={errors}
            handleChange={handleChange}
          />

          <Shipping
            values={values}
            errors={errors}
            handleChange={handleChange}
          />

          <Payment
            values={values}
            errors={errors}
            handleChange={handleChange}
            isEmoneyPayment={isEmoneyPayment}
            isCashPayment={isCashPayment}
            onEmoneyClick={handleEmoneyPaymentClick}
            onCashClick={handleCashPaymentClick}
          />
        </form>

        <div className="checkout__summary">
          <Cart cart={cart} title="summary" isSummary={true}>
            <div className="cart__checkout-continer">
              <div className="cart__total-container">
                <div className="cart__total-description-wrap">
                  <p className="cart__total-description">TOTAL</p>
                  <p className="cart__total-price">{`$ ${totalPrice}`}</p>
                </div>
              </div>

              <div className="cart__total-container">
                <div className="cart__total-description-wrap">
                  <p className="cart__total-description">SHIPPING</p>
                  <p className="cart__total-price">{`$ ${shippingPrice}`}</p>
                </div>
              </div>

              <div className="cart__total-container">
                <div className="cart__total-description-wrap">
                  <p className="cart__total-description">VAT (INCLUDED)</p>
                  <p className="cart__total-price">{`$ ${vatCalculator(
                    totalPrice
                  )}`}</p>
                </div>
              </div>
            </div>

            <div className="cart__total-container">
              <div className="cart__total-description-wrap">
                <p className="cart__total-description">GRAND TOTAL</p>
                <p className="cart__total-price cart__total-price_type_grand">{`$ ${grandTotal}`}</p>
              </div>
            </div>

            <button
              type="button"
              className={`cart__button ${
                isValid && grandTotal && (isCashPayment || isEmoneyPayment)
                  ? ""
                  : "cart__button_disabled"
              }`}
              onClick={handlePayment}
            >
              {"CONTINUE & PAY"}
            </button>
          </Cart>
        </div>
      </div>
    </section>
  );
};
export default Checkout;
