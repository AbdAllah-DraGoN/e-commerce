import { useEffect, useState } from "react";
import "./cart.css";
import Button from "../global/Button";
const myCart = localStorage.getItem("my-cart");
let cart = false;
if (myCart) {
  cart = JSON.parse(myCart);
}
const Cart = () => {
  const [products, setProducts] = useState(false);
  const [cuantity, setCuantity] = useState({});

  const handleChange = (e) => {
    const cuantityNow = e.target.value;
    const id = e.target.id;
    if (cuantityNow < 1) {
      setCuantity({ ...cuantity, [id]: 1 });
      console.log("less");
    } else {
      setCuantity({ ...cuantity, [id]: +cuantityNow });
    }
  };
  const handleBlur = (e) => {
    const cuantityNow = e.target.value;
    const id = e.target.id;
    if (cuantityNow < 1) {
      e.target.value = cuantity["e.id"];
    }
  };

  const handleClick = (e) => {
    console.log(e);
  };

  useEffect(() => {
    console.log(cuantity);
  }, [cuantity]);

  useEffect(() => {
    setProducts(cart.products);
    // console.log(products);
  }, [cart]);

  return (
    <div className="cart">
      <div className="my-container">
        <h1>Cart</h1>
        <div className="head">
          <span> product</span>
          <span> price</span>
          <span> cuantity</span>
          <span> subtotal</span>
        </div>
        <ul>
          {products ? (
            products.map((e) => {
              let newPrice = e.price;

              return (
                <li key={e.id} id={e.id} className="product-in-cart">
                  <div
                    onClick={() => {
                      handleClick(e.id);
                    }}
                  >
                    x
                  </div>
                  <div>
                    <img src={e.img} />
                    <h4>{e.title}</h4>
                  </div>
                  <div>
                    <p>${e.price}</p>
                  </div>
                  <div>
                    <input
                      type="number"
                      name="cuantity"
                      id={`cuantity${e.id}`}
                      className="cuantity"
                      min="1"
                      placeholder="1"
                      value={cuantity["e.id"]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div>
                    <p>${e.price}</p>
                  </div>
                </li>
              );
            })
          ) : (
            <h2>You Don't Have Products in Your Cart</h2>
          )}
        </ul>
        <Button
          name="delete all"
          btnFunction={() => {
            localStorage.clear();
            alert("You Delete All Items Successfuly");
          }}
        />
      </div>
    </div>
  );
};

export default Cart;
