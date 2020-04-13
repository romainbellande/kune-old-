import { createStore, CombinedState } from 'redux';

import { RootState } from 'src/redux/root-reducer';

const initialState: CombinedState<RootState> = {
  auth: {
    accessToken: {
      accessToken: 'myAccessToken',
      authorizeUrl: '',
      tokenType: 'Bearer',
      scopes: ['email'],
      expiresAt: 123,
      userinfoUrl: '',
    },
  },
};

export default createStore(() => initialState);
