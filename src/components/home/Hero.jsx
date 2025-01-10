import Carousel from "./Carousel";

function Hero() {
  return (
    <div className="hero-section">
      <ul className="categories-menu">
        <li>Category 1</li>
        <li>Category 2</li>
        <li>Category 3</li>
        <li>Category 4</li>
        <li>Category 5</li>
        <li>Category 6</li>
        <li>Category 7</li>
        <li>Category 8</li>
      </ul>

      <Carousel />
    </div>
  );
}

export default Hero;
