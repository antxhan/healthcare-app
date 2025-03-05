import './Header.css';
import Logo from '../Logo/Logo';
import User from '../User/User';
import Searchbar from '../Searchbar/Searchbar';
import MobileMenuButton from '../MobileMenuButton/MobileMenuButton';

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <User />
      <Searchbar />
      <MobileMenuButton/>
    </header>
  );
}
