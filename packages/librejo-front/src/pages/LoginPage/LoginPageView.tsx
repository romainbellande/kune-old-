import React, { useEffect } from 'react';
import { oktaSignIn } from 'src/common/okta';

const LoginPageView = () => {
  useEffect(() => {
    oktaSignIn.renderEl(
      { el: '#okta-login-container' },
      function success(res: any) {
        // Nothing to do in this case, the widget will automatically redirect
        // the user to Okta for authentication, then back to this page if successful
      },
      function error(err: any) {
        // handle errors as needed
        console.error(err);
      },
    );
  }, []);

  return (
    <div>
      <div id="okta-login-container"></div>
    </div>
  );
};

export default LoginPageView;
