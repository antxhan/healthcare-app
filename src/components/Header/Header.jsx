import './Header.css';
import Logo from '../Logo/Logo';
import User from '../User/User';
import Searchbar from '../Searchbar/Searchbar';

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <User />
      <Searchbar />
    </header>
  );
}
