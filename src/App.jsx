import './App.css';
import { RouterProvider } from 'react-router-dom';
import { dashboardRouter } from './routers/DashboardRouter/DashboardRouter';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={dashboardRouter} />
    </>
  );
}

export default App;
