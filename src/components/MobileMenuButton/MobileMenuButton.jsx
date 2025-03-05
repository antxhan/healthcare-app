import './MobileMenuButton.css';

export default function MobileMenuButton({ isOpen, onToggle }) {
  return (
    <button
      className={`mobile-menu-btn ${isOpen ? 'open' : ''}`}
      onClick={onToggle}
    >
      <div></div>
      <div></div>
    </button>
  );
}
