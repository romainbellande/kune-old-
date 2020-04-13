import React from 'react';
import { action } from '@storybook/addon-actions';

import LoginForm from './LoginFormContainer';

export default { title: 'LoginForm', component: LoginForm };

export const Default = () => <LoginForm onSubmit={action('onSubmit')} />;
