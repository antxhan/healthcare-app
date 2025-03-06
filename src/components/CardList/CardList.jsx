import './CardList.css';

export default function CardList({ children }) {
  return (
    <section className="card-list-wrapper">
      <ul className="card-list">{children}</ul>
    </section>
  );
}
