function SectionHeader({ title = "Title", children }) {
  return (
    <div className="section-header">
      <h1 className="title">{title}</h1>
      {children}
    </div>
  );
}

export default SectionHeader;
