import './PageTitle.css';

export default function PageTitle({ title, children }) {
  return (
    <header>
      <h1 className="page-title heading-xxl">{title}</h1>
      <div className="header-buttons">{children}</div>
    </header>
  );
}
