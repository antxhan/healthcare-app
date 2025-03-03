import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import Home from '../../pages/Dashboard/Home/Home';
import Inbox from '../../pages/Dashboard/Inbox/Inbox';
import Appointments from '../../pages/Dashboard/Appointments/Appointments';
import Journal from '../../pages/Dashboard/Journal/Journal';
import Settings from '../../pages/Dashboard/Settings/Settings';

export const dashboardRouter = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/inbox',
        element: <Inbox />,
      },
      {
        path: '/appointments',
        element: <Appointments />,
      },
      {
        path: '/journal',
        element: <Journal />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
    ],
  },
]);
