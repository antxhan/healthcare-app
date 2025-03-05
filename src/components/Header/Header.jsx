import './Header.css';
import { useState } from 'react';
import Logo from '../Logo/Logo';
import User from '../User/User';
import Searchbar from '../Searchbar/Searchbar';
import MobileMenuButton from '../MobileMenuButton/MobileMenuButton';
import DashboardNav from '../DashboardNav/DashboardNav';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="header">
        <Logo />
        <User />
        <Searchbar />
        <MobileMenuButton onToggle={toggleMobileMenu} />
      </header>
      <DashboardNav isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}
