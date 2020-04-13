import React, { FC } from 'react';
import * as Yup from 'yup';

import LoginFormView from './LoginFormView';
import Credentials from './credentials.interface';

const initialValues = { email: '', password: '' };

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Email is required.'),
  password: Yup.string().required('Password is required.'),
});

type LoginFormProps = {
  /**
   * Event triggered when a user submit the login form.
   */
  onSubmit(credentials: Credentials): void;
};

const LoginFormContainer: FC<LoginFormProps> = ({ onSubmit }) => {
  return <LoginFormView validationSchema={validationSchema} onSubmit={onSubmit} initialValues={initialValues} />;
};

export default LoginFormContainer;
