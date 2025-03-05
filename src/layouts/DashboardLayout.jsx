import './DashboardLayout.css';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import DashboardNav from '../components/DashboardNav/DashboardNav';
import DashboardContent from '../components/DashboardContent/DashboardContent';

export default function DashboardLayout() {
  return (
    <>
      <Header />
      <section className="dashboard">
        <DashboardNav />
        <DashboardContent>
          <Outlet />
        </DashboardContent>
      </section>
    </>
  );
}
