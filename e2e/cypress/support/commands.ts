import { register as registerSnapshot } from '@cypress/snapshot';

declare namespace Cypress {
  interface Chainable<Subject> {
    snapshot: (name: string) => void;
  }
}
registerSnapshot();

// Here we better to implement non UI login process
export const visitWithCredentials = function (username, password, path = '') {};