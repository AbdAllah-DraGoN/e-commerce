import Carousel from "./Carousel";

function Hero() {
  return (
    <div className="hero-section">
      <ul className="categories-menu">
        <li>fragrances</li>
        <li>groceries</li>
        <li>decoration</li>
        <li>mens {" >"}</li>
        <li>womens {" >"}</li>
        <li>laptops</li>
        <li>sunglasses</li>
        <li>vehicle</li>
      </ul>
      <Carousel />
    </div>
  );
}

export default Hero;
