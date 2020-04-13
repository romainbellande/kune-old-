import { RouteProps } from 'react-router-dom';

export default interface AppRouteProps extends RouteProps {
  secure?: boolean;
}
