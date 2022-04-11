import "./Cart.css";

import CartCard from "./CartCard/CartCard";

const Cart = ({
  cart,
  onCartUpdate,
  onRemove,
  onClear,
  title,
  isSummary,
  children,
}) => {
  return (
    <div className="cart">
      <div className="cart__title-container">
        <p className="cart__title">{title}</p>
        {isSummary ? (
          ""
        ) : (
          <p className="cart__remove" onClick={onClear}>
            Remove all
          </p>
        )}
      </div>
      <ul className="cart__items">
        {cart.map((product, id) => (
          <CartCard
            key={id}
            card={product}
            onCartUpdate={onCartUpdate}
            onRemove={onRemove}
            isSummary={isSummary}
          />
        ))}
      </ul>
      {children}
    </div>
  );
};
export default Cart;
