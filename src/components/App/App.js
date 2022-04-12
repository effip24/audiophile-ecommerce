import "./App.css";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import Header from "../Header/Header";
import Home from "../Pages/Home/Home";
import Headphones from "../Pages/Headphones/Headphones";
import Speakers from "../Pages/Speakers/Speakers";
import Earphones from "../Pages/Earphones/Earphones";
import Product from "../Pages/Product/Product";
import Checkout from "../Pages/Checkout/Checkout";
import CartModal from "../CartModal/CartModal";
import InfoToolTip from "../InfoToolTip/InfoToolTip";
import Footer from "../Footer/Footer";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import productsData from "../../utils/data.json";

function App() {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);

  const [headphones, setHeadphone] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [earphones, setEarphones] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );
  const [totalPrice, setTotalPrice] = useState(0);

  const [product, setProduct] = useState({});

  const [order, setOrder] = useState({
    orderInfo: {},
    products: [],
    total: 0,
    shipping: 0,
    grandTotal: 0,
  });

  useEffect(() => {
    setHeadphone(
      productsData
        .filter((product) => product.category === "headphones")
        .reverse()
    );

    setSpeakers(
      productsData
        .filter((product) => product.category === "speakers")
        .reverse()
    );

    setEarphones(
      productsData
        .filter((product) => product.category === "earphones")
        .reverse()
    );

    calculateTotalPrice();
  }, []);

  // listeners for cart modal closing
  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        setIsCartModalOpen(false);
      }
    };

    const closeByClick = (evt) => {
      if (
        !evt.target.classList.contains("cart-modal__container") &&
        evt.target.classList.contains("cart-modal")
      ) {
        setIsCartModalOpen(false);
      }
    };

    document.addEventListener("keydown", closeByEscape);
    document.addEventListener("click", closeByClick);

    return () => {
      document.removeEventListener("keydown", closeByEscape);
      document.removeEventListener("click", closeByClick);
    };
  }, []);

  const handleProductClick = (product) => {
    setProduct(product);
  };

  const handleCartClick = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };

  const handleAddToCart = (product) => {
    //check if the product not in cart
    if (cart.every((p) => p.id !== product.id)) {
      cart.unshift(product);
    }
    // if the product already in cart, update the amount
    else {
      cart.map((p) => {
        if (p.id === product.id) {
          p.total += product.total;
          p.amount += product.amount;
        }
        return p;
      });
    }
    calculateTotalPrice();
    saveToLocalCart();
  };

  const handleCartUpdate = (product) => {
    cart.map((p) => {
      if (p.id === product.id) {
        p.amount = product.amount;
        p.total = product.amount * p.price;
      }
      return p;
    });
    calculateTotalPrice();
    saveToLocalCart();
  };

  const handleRemoveFromCart = (product) => {
    const updatedCart = cart.filter((p) => p.id !== product.id);
    setCart(updatedCart);

    calculateTotalPrice(updatedCart);
    saveToLocalCart(updatedCart);
  };

  const handleClearCart = () => {
    setCart([]);
    setTotalPrice(0);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  const calculateTotalPrice = (c = cart) => {
    let sum = 0;
    c.forEach((p) => (sum += p.total));
    setTotalPrice(sum);
  };

  const saveToLocalCart = (c = cart) => {
    localStorage.setItem("cart", JSON.stringify(c));
  };

  const handlePayment = (order) => {
    setOrder(order);
    setIsInfoToolTipOpen(true);
    handleClearCart();
  };

  const closeAllModals = () => {
    setIsCartModalOpen(false);
    setIsInfoToolTipOpen(false);
  };

  return (
    <div className="App">
      <Header onCartClick={handleCartClick} cartItems={cart.length} />

      <ScrollToTop>
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>

          <Route path={"/headphones"}>
            <Headphones
              headphones={headphones}
              onPorductClick={handleProductClick}
            />
          </Route>

          <Route path={"/speakers"}>
            <Speakers speakers={speakers} onPorductClick={handleProductClick} />
          </Route>

          <Route path={"/earphones"}>
            <Earphones
              earphones={earphones}
              onPorductClick={handleProductClick}
            />
          </Route>

          <ProtectedRoute path="/product" product={product}>
            <Product product={product} onAddToCart={handleAddToCart} />
          </ProtectedRoute>

          <Route path={"/checkout"}>
            <Checkout
              cart={cart}
              totalPrice={totalPrice}
              onPayment={handlePayment}
            />
          </Route>
        </Switch>
      </ScrollToTop>

      <CartModal
        isOpen={isCartModalOpen}
        cart={cart}
        totalPrice={totalPrice}
        onCartUpdate={handleCartUpdate}
        onRemove={handleRemoveFromCart}
        onClear={handleClearCart}
        onCheckout={closeAllModals}
      />

      <InfoToolTip
        isOpen={isInfoToolTipOpen}
        order={order}
        onBack={closeAllModals}
      />

      <Footer />
    </div>
  );
}

export default App;
