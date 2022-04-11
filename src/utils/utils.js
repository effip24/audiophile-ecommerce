const imagePath = (path) => {
  const tablet = window.matchMedia("(max-width: 1440px)");
  const mobile = window.matchMedia("(max-width: 768px)");

  if (tablet.matches) {
    return path.tablet.substring(1, path.tablet.length - 4);
  } else if (mobile.matches) {
    return path.mobile.substring(1, path.mobile.length - 4);
  } else {
    return path.desktop.substring(1, path.mobile.length - 3);
  }
};

const vatCalculator = (total) => {
  return (20 * total) / 100;
};

const animateCart = () => {
  document.querySelector(".header__cart-icon").className = "header__cart-icon";

  setTimeout(() => {
    document
      .querySelector(".header__cart-icon")
      .classList.add("header__cart-icon_animated");
  }, 300);
};

const animateRemoveFromCart = () => {
  document
    .querySelector(".cart-card__item")
    .classList.add("cart-card__item_remove");

  setTimeout(() => {
    document.querySelector(".cart-card__item").className = "cart-card__item";
  }, 300);
};

export { imagePath, vatCalculator, animateCart, animateRemoveFromCart };
