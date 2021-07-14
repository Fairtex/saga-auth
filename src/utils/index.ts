import { AuthValues } from '../types';
import { history } from '../store';

export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchAuth = (ms: number, user: AuthValues) =>
  delay(ms).then(() => ({ name: user.name, email: user.email }));

export const fetchLogOut = (ms: number) =>
  delay(ms).then(() => {
    console.log('LOGOUT');
  });

export const forwardTo = (location: string) => {
  history.push(location);
};
