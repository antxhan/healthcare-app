import './DashboardNav.css';
import { NavLink } from 'react-router-dom';
import { dashboardRouter } from '../../routers/DashboardRouter/DashboardRouter';
import { capitalizeFirstLetter } from '../../utils/utils';

export default function DashboardNav() {
  const routes = dashboardRouter.routes[0].children;

  return (
    <aside>
      <nav>
        <ul>
          {routes.map((route) => (
            <li key={route.path}>
              <NavLink to={route.path}>
                {route.path === '/' ? 'Home' : capitalizeFirstLetter(route.path.slice(1))}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
