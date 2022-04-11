const Billing = ({ values, errors, handleChange }) => {
  return (
    <div className="checkout__wrap">
      <label className="checkout__label">Billing Details</label>
      <div className="checkout__input-row">
        <div className="checkout__input-wrap">
          <label className="checkout__input-label">Name</label>
          <input
            name="name"
            required
            type="text"
            pattern="[a-zA-Z\s]{1,20}"
            className="checkout__input"
            placeholder="Alexei Ward"
            onChange={handleChange}
            value={values.name || ""}
          ></input>
          <label className="checkout__input-label-error">{errors.name}</label>
        </div>

        <div className="checkout__input-wrap">
          <label className="checkout__input-label">Email Address</label>
          <input
            name="email"
            required
            type="email"
            className="checkout__input"
            placeholder="alexei@mail.com"
            onChange={handleChange}
            value={values.email || ""}
          ></input>
          <label className="checkout__input-label-error">{errors.email}</label>
        </div>
      </div>

      <div className="checkout__input-wrap">
        <label className="checkout__input-label">Phone Number</label>
        <input
          name="phone"
          required
          pattern="[0-9]{1,10}"
          className="checkout__input"
          placeholder="+1 202-555-0136"
          onChange={handleChange}
          value={values.phone || ""}
        ></input>
        <label className="checkout__input-label-error">{errors.phone}</label>
      </div>
    </div>
  );
};
export default Billing;
