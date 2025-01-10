export default function TopHeader() {
  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        padding: "1rem",
        fontSize: "1rem",
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <p style={{ fontWeight: "300" }}>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </p>
      <a
        style={{
          textDecoration: "underline",
          fontWeight: "500",
          color: "#fff",
        }}
      >
        ShopNow
      </a>
    </div>
  );
}
