// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

import 'jest-canvas-mock';
import 'text-encoding';
import '@testing-library/jest-dom/extend-expect';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

// Object.defineProperty(window, 'getComputedStyle', {
//   value: () => ({
//     getPropertyValue: () => {
//       return '';
//     },
//   }),
// });

if (typeof TextEncoder !== 'undefined' && typeof TextDecoder !== 'undefined') {
  /* global TextEncoder, TextDecoder */
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

global.OktaSignIn = OktaSignIn;

const DATE_TO_USE = new Date('2016');
const _Date = Date;

global.Date = jest.fn(() => DATE_TO_USE);
global.Date.UTC = _Date.UTC;
global.Date.parse = _Date.parse;
global.Date.now = _Date.now;
