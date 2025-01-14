import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div
      id="header"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "2rem 0 1rem",
        background: "#fff",
        borderBottom: "1px solid var(--border-main-color)",
      }}
    >
      <div
        className="my-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>
          <Link to="/e-commerce/">Exclusive</Link>
        </h2>
        <ul style={{ display: "flex", gap: "1rem" }}>
          <li>
            <Link to="/e-commerce/">Home</Link>
          </li>
          <li>
            <Link to="/e-commerce/about">About</Link>
          </li>
          <li>
            <Link to="/e-commerce/contact">Contact</Link>
          </li>
          <li>
            <Link to="/e-commerce/signup">Sign Up</Link>
          </li>
        </ul>
        <div style={{ display: "flex", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: "5px",
              padding: "8px",
              width: "300px",
              backgroundColor: "#f5f5f5",
            }}
          >
            <input
              type="text"
              placeholder="What are you looking for?"
              style={{
                fontSize: "15px",
                border: "none",
                outline: "none",
                flex: 1,
                backgroundColor: "transparent",
              }}
            />
            <button
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              {/* <SearchIcon /> */}
            </button>
          </div>

          <Link
            to="/e-commerce/cart"
            style={{
              background: "#eee",
              cursor: "pointer",
              borderRadius: "10px",
              padding: "5px",
            }}
          >
            cart
          </Link>
          {/*<button
            style={{ border: "none", background: "none", cursor: "pointer" }}
          ></button> */}
        </div>
      </div>
    </div>
  );
}
