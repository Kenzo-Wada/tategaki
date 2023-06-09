import type { Session } from 'next-auth';
import { useSession as useNextAuthSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

interface HooksType {
  session: Session | null;
  loading: boolean;
  userName: string | null;
  userEmail: string | null;
  userImage: string | null;
  userId: string | null;
}

const useSessionUser = (): HooksType => {
  const { data: session, status } = useNextAuthSession();
  const loading = status === 'loading';

  const [sessionData, setSessionData] = useState<Session | null>(null);

  useEffect(() => {
    if (!loading && session) {
      setSessionData(session);
    }
  }, [session, loading]);

  return {
    session: sessionData,
    loading,
    userName: sessionData?.user?.name || null,
    userEmail: sessionData?.user?.email || null,
    userImage: sessionData?.user?.image || null,
    userId: sessionData?.user?.id || null,
  };
};

export default useSessionUser;
