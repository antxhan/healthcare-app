import { Link } from 'react-router';

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/messages">Messages</Link>
      </nav>
      <header>header</header>
      <aside>aside</aside>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}
