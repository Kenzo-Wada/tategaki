import { signIn as NextAuthSignIn, signOut as NextAuthSignOut } from 'next-auth/react';
import { useCallback } from 'react';

interface HooksType {
  signIn: () => void;
  signOut: () => void;
}

const useAuth = (): HooksType => {
  const signIn = useCallback(() => {
    NextAuthSignIn('google');
  }, []);

  const signOut = useCallback(() => {
    NextAuthSignOut();
  }, []);

  return {
    signIn,
    signOut,
  };
};

export default useAuth;
