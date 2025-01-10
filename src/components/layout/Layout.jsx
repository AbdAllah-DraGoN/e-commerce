import { Outlet } from "react-router-dom";
import "./layout.css";
import Header from "./Header";
import TopHeader from "./TopHeader";

function Layout() {
  return (
    <div>
      <header>
        <TopHeader />
        <Header />
      </header>

      <main>
        <Outlet />
      </main>

      <footer
        style={{ background: "#EEE", padding: "10px", textAlign: "center" }}
      >
        <p>&copy; 2024 My Website</p>
      </footer>
    </div>
  );
}

export default Layout;
