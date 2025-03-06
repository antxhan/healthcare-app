import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import Home from '../../pages/Dashboard/Home/Home';
import Record from '../../pages/Dashboard/Record/Record';
import Appointments from '../../pages/Dashboard/Appointments/Appointments';
import Results from '../../pages/Dashboard/Results/Results';
import Medication from '../../pages/Dashboard/Medication/Medication';
import Messages from '../../pages/Dashboard/Messages/Messages';
import YourHealthCenter from '../../pages/Dashboard/YourHealthCenter/YourHealthCenter';

export const dashboardRouter = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        name: 'Home',
      },
      {
        path: '/record',
        element: <Record />,
      },
      {
        path: '/appointments',
        element: <Appointments />,
      },
      {
        path: '/results',
        element: <Results />,
      },
      {
        path: '/medication',
        element: <Medication />,
      },
      {
        path: '/messages',
        element: <Messages />,
      },
      {
        path: '/your_health_center',
        element: <YourHealthCenter />,
        name: 'Your Health Center',
      },
    ],
  },
]);
