import { Outlet } from 'react-router-dom';
import DashboardNav from '../components/DashboardNav/DashboardNav';
import DashboardContent from '../components/DashboardContent/DashboardContent';

export default function DashboardLayout() {
  return (
    <main className="dashboard">
      <DashboardNav />
      <DashboardContent>
        <Outlet />
      </DashboardContent>
    </main>
  );
}
