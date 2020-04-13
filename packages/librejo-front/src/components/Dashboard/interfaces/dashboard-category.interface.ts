import DashboardRoute from './dashboard-route.interface';

export default interface DashboardCategory {
  id: string;
  children: DashboardRoute[];
}
