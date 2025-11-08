import { WebPlugin } from '@capacitor/core';

import type { AuthenticatorPlugin } from './definitions';

export class AuthenticatorWeb extends WebPlugin implements AuthenticatorPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
