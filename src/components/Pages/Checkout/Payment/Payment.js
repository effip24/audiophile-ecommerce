const Payment = ({
  values,
  errors,
  handleChange,
  isEmoneyPayment,
  isCashPayment,
  onEmoneyClick,
  onCashClick,
}) => {
  return (
    <div className="checkout__wrap">
      <label className="checkout__label">payment details</label>

      <div className="checkout__input-row checkout__input-row_type_payment">
        <label className="checkout__input-label">Payment Method</label>

        <div className="checkout__input-column">
          <div className="checkout__radio-wrap">
            <input
              value="emoney"
              type="radio"
              name="payment"
              className="checkout__input-radio"
              checked={isEmoneyPayment}
              readOnly
              onClick={onEmoneyClick}
            ></input>
            <label className="checkout__radio-label">e-Money</label>
          </div>

          <div className="checkout__radio-wrap">
            <input
              type="radio"
              name="payment"
              className="checkout__input-radio"
              checked={isCashPayment}
              readOnly
              onClick={onCashClick}
            ></input>
            <label className="checkout__radio-label">Cash on Delivery</label>
          </div>
        </div>
      </div>

      {isEmoneyPayment ? (
        <div className="checkout__input-row">
          <div className="checkout__input-wrap">
            <label className="checkout__input-label">e-Money Number</label>
            <input
              name="emoneyNumber"
              required
              pattern="[0-9]{1,20}"
              className="checkout__input"
              placeholder="238521993"
              onChange={handleChange}
              value={values.emoneyNumber || ""}
            ></input>
            <label className="checkout__input-label-error">
              {errors.emoneyNumber}
            </label>
          </div>

          <div className="checkout__input-wrap">
            <label className="checkout__input-label">e-Money PIN</label>
            <input
              name="emoneyPin"
              required
              pattern="[0-9]{1,4}"
              className="checkout__input"
              placeholder="6891"
              onChange={handleChange}
              value={values.emoneyPin || ""}
            ></input>
            <label className="checkout__input-label-error">
              {errors.emoneyPin}
            </label>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Payment;
