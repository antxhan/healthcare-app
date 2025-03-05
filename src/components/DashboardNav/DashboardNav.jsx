import './DashboardNav.css';
import { NavLink } from 'react-router-dom';
import { dashboardRouter } from '../../routers/DashboardRouter/DashboardRouter';
import { capitalizeFirstLetter } from '../../utils/utils';

export default function DashboardNav({isOpen, onClose}) {
  const routes = dashboardRouter.routes[0].children;

  return (
    <aside className={`dashboard-nav ${isOpen ? 'open' : ''}`}>
      <nav>
        <ul>
          {routes
            .filter((route) => route.path !== '/settings')
            .map((route) => (
              <li key={route.path}>
                <NavLink to={route.path} onClick={onClose}>
                  {route.path === '/'
                    ? 'Home'
                    : capitalizeFirstLetter(route.path.slice(1))}
                </NavLink>
              </li>
            ))}
        </ul>
        <ul>
          <li>
            <NavLink to={'/settings'}>{'Settings'}</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
