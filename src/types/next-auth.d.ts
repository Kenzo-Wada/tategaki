import { Session } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    custom?: {
      account?: {
        provider: string;
        id_token: string;
      };
    };
  }
}
