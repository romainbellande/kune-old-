import React from 'react';
import ReactDOM from 'react-dom';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import { Provider } from 'react-redux';

import './index.css';
import * as serviceWorker from './serviceWorker';
import routing from './routing';
import './i18n';
import store from './redux/store';
import { BrowserRouter as Router, Route } from 'react-router-dom';

LogRocket.init(process.env.REACT_APP_LOG_ROCKET || '');

setupLogRocketReact(LogRocket);

const render = () => {
  const App = require('./components/App').default;

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Route path="/">
          <App routes={routing} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./components/App', render);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
