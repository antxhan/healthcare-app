import './App.css';
import { RouterProvider } from 'react-router-dom';
import { dashboardRouter } from './routers/DashboardRouter/DashboardRouter';

function App() {
  return <RouterProvider router={dashboardRouter} />;
}

export default App;
