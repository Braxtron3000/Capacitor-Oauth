import { registerPlugin } from '@capacitor/core';

import type { AuthenticatorPlugin } from './definitions';

const Authenticator = registerPlugin<AuthenticatorPlugin>('Authenticator', {
  web: () => import('./web').then((m) => new m.AuthenticatorWeb()),
});

export * from './definitions';
export { Authenticator };
