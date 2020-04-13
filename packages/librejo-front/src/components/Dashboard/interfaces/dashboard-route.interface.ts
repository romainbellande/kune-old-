import { RouteProps } from 'react-router';

export default interface DashboardRoute extends RouteProps {
  id: string;
  icon: JSX.Element;
  active?: boolean;
}
