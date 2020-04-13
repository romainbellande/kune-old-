import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Security, SecureRoute } from '@okta/okta-react';

import App from '.';
import storeMock from 'src/common/mocks/store.mock';

jest.mock('@okta/okta-react', () => ({
  Security: ({ children }: any) => children,
  SecureRoute: ({ children }: any) => children,
}));

test('renders learn react link', () => {
  const { asFragment } = render(
    <Provider store={storeMock}>
      <BrowserRouter>
        <App routes={[]} />
      </BrowserRouter>
      ,
    </Provider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
