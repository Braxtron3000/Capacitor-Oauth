export interface AuthenticatorPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
