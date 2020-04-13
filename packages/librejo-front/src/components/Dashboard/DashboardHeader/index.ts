import { withOktaAuth } from '@okta/okta-react';

import DashboardHeader from './DashboardHeaderContainer';

export default withOktaAuth(DashboardHeader);
