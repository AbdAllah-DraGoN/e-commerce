function Carousel() {
  return (
    <div className="carousel">
      <div className="slides">
        <div className="slide">
          <div className="overlay"></div>
          <div className="silde-content">
            <h3>Slide 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="slide">
          <div className="overlay"></div>
          <div className="silde-content">
            <h3>Slide 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="slide">
          <div className="overlay"></div>
          <div className="silde-content">
            <h3>Slide 3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
