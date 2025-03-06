import './CardGrid.css';

export default function CardGrid({ children }) {
  return (
    <section className="card-grid-wrapper">
      <div className="card-grid">{children}</div>
    </section>
  );
}
