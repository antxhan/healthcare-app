import './DashboardNav.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { dashboardRouter } from '../../routers/DashboardRouter/DashboardRouter';
import { capitalizeFirstLetter } from '../../utils/utils';
import arrowSVG from '../../assets/arrow.svg';

export default function DashboardNav({ isOpen, onClose }) {
  const routes = dashboardRouter.routes[0].children;
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const languages = ['English', 'Svenska'];

  const toggleLanguageDropdown = (e) => {
    e.preventDefault();
    setIsLanguageOpen(!isLanguageOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsLanguageOpen(false);
  };

  return (
    <aside className={`dashboard-nav ${isOpen ? 'open' : ''}`}>
      <nav>
        <ul>
          {routes.map((route) => (
            <li key={route.path}>
              <NavLink
                to={route.path}
                onClick={onClose}
                className={isOpen ? 'heading-xxl' : ''}
              >
                {route.name
                  ? route.name
                  : capitalizeFirstLetter(route.path.slice(1))}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="language-selector-container">
          <div className={isOpen ? 'heading-xxl' : ''}>Language:</div>
          <div className="dropdown-wrapper">
            <button
              className="language-dropdown-button"
              onClick={toggleLanguageDropdown}
            >
              {selectedLanguage}
              <img
                className="dropdown-arrow"
                src={arrowSVG}
                alt="Select arrow"
              />
            </button>

            {isLanguageOpen && (
              <ul className="language-dropdown-menu">
                {languages.map((language) => (
                  <li key={language}>
                    <button
                      onClick={() => selectLanguage(language)}
                      className={selectedLanguage === language ? 'active' : ''}
                    >
                      {language}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </aside>
  );
}
