import FristSection from "./FristSection";
import Hero from "./Hero";
import "./home.css";

function HomePage() {
  return (
    <div className="home-page">
      <div className="my-container">
        <Hero />
        <FristSection />
      </div>
    </div>
  );
}

export default HomePage;
