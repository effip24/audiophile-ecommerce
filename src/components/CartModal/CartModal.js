import "./CartModal.css";

import { Link } from "react-router-dom";

import Cart from "../Cart/Cart";

const CartModal = ({
  isOpen,
  cart,
  totalPrice,
  onCartUpdate,
  onRemove,
  onClear,
  onCheckout,
}) => {
  return (
    <section className={`cart-modal ${isOpen ? "cart-modal_open" : ""}`}>
      <div className="cart-modal__container">
        <div className="cart-modal__cart">
          <Cart
            cart={cart}
            totalPrice={totalPrice}
            onCartUpdate={onCartUpdate}
            onRemove={onRemove}
            onClear={onClear}
            title={`cart (${cart.length})`}
          >
            <div className="cart__total-container">
              <div className="cart__total-description-wrap">
                <p className="cart__total-description">TOTAL</p>
                <p className="cart__total-price">{`$ ${totalPrice}`}</p>
              </div>
            </div>

            <Link
              className={`cart__button ${
                cart.length < 1 ? "cart__button_disabled" : ""
              }`}
              to="/checkout"
              onClick={onCheckout}
            >
              checkout
            </Link>
          </Cart>
        </div>
      </div>
    </section>
  );
};
export default CartModal;
