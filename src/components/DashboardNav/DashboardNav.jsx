import './DashboardNav.css';
import { NavLink } from 'react-router-dom';
import { dashboardRouter } from '../../routers/DashboardRouter/DashboardRouter';
import { capitalizeFirstLetter } from '../../utils/utils';
import User from '../User/User';

export default function DashboardNav() {
  const routes = dashboardRouter.routes[0].children;

  return (
    <aside className="dashboard-nav">
      <nav>
        <ul>
          {routes
            .filter((route) => route.path !== '/settings')
            .map((route) => (
              <li key={route.path}>
                <NavLink to={route.path}>
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
