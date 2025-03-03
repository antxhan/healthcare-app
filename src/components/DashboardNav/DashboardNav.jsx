import './DashboardNav.css';
import { NavLink } from 'react-router-dom';
import { dashboardRouter } from '../../routers/DashboardRouter/DashboardRouter';
import { capitalizeFirstLetter } from '../../utils/utils';
import userSVG from '../../assets/user.svg';

export default function DashboardNav() {
  const routes = dashboardRouter.routes[0].children;

  return (
    <aside className="dashboard-nav">
      <div className="user">
        <img src={userSVG} alt="User avatar" />
        <p className="user__name">John Doe</p>
      </div>
      <hr />
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
