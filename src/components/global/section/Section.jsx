function Section({ title = "Title", children }) {
  return (
    <section className="section">
      <div className="section-head">
        <div className="the-box"></div>
        {title}
      </div>
      <div className="section-children">{children}</div>
    </section>
  );
}

export default Section;
