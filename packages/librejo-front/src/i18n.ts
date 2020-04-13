import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const translationKeys = {
  login: {
    email: {
      label: 'login.email.label',
    },
    password: {
      label: 'login.password.label',
    },
    submit: 'login.submit',
  },
};

const resources = {
  en: {
    translation: {
      // Login
      [translationKeys.login.email.label]: 'Email',
      [translationKeys.login.password.label]: 'Password',
      [translationKeys.login.submit]: 'Submit',
    },
  },
};

export default i18n.use(initReactI18next).init({
  lng: 'en',
  resources,
  keySeparator: false,
});
