const Shipping = ({ values, errors, handleChange }) => {
  return (
    <div className="checkout__wrap">
      <label className="checkout__label">shipping info</label>
      <div className="checkout__input-wrap">
        <label className="checkout__input-label">Address</label>
        <input
          name="address"
          required
          type="text"
          className="checkout__input"
          placeholder="1137 Williams Avenue"
          onChange={handleChange}
          value={values.address || ""}
        ></input>
        <label className="checkout__input-label-error">{errors.address}</label>
      </div>

      <div className="checkout__input-row">
        <div className="checkout__input-wrap">
          <label className="checkout__input-label">ZIP Code</label>
          <input
            name="zipCode"
            required
            pattern="[0-9]{1,20}"
            className="checkout__input"
            placeholder="10001"
            onChange={handleChange}
            value={values.zipCode || ""}
          ></input>
          <label className="checkout__input-label-error">
            {errors.zipCode}
          </label>
        </div>

        <div className="checkout__input-wrap">
          <label className="checkout__input-label">City</label>
          <input
            name="city"
            required
            pattern="[a-zA-Z\s]{1,20}"
            className="checkout__input"
            placeholder="New York"
            onChange={handleChange}
            value={values.city || ""}
          ></input>
          <label className="checkout__input-label-error">{errors.city}</label>
        </div>
      </div>

      <div className="checkout__input-wrap">
        <label className="checkout__input-label">Country</label>
        <input
          name="country"
          required
          pattern="[a-zA-Z\s]{1,20}"
          className="checkout__input"
          placeholder="United States"
          onChange={handleChange}
          value={values.country || ""}
        ></input>
        <label className="checkout__input-label-error">{errors.country}</label>
      </div>
    </div>
  );
};
export default Shipping;
