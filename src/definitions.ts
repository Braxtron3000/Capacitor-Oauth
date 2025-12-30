export interface AuthenticatorPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  hello(options: { value: string }): Promise<{ value: string }>;
  readSettings(): Promise<{ email?: string; token?: string; name?: string; image?: string }>;
}
