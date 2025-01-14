const addToCart = (product) => {
  const myCart = localStorage.getItem("my-cart");

  if (myCart) {
    const cart = JSON.parse(myCart);

    if (cart.products) {
      let isExist = false;
      cart.products.forEach((e) => {
        if (e.id == product.id) {
          isExist = true;
        }
      });
      if (!isExist) {
        cart.products.push(product);
      }
    }

    localStorage.setItem("my-cart", JSON.stringify(cart));
  } else {
    localStorage.setItem(
      "my-cart",
      JSON.stringify({
        products: [product],
      })
    );
  }
};

export default addToCart;
