import type { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

interface HooksType {
  session: Session | null;
  userName: string | null;
  userEmail: string | null;
  userImage: string | null;
  userId: string | null;
}

const useSessionUser = (): HooksType => {
  const { data: session } = useSession();
  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userImage, setUserImage] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  if (session?.user?.name && !userName) {
    setUserName(session.user.name);
  }

  if (session?.user?.email && !userEmail) {
    setUserEmail(session.user.email);
  }

  if (session?.user?.image && !userImage) {
    setUserImage(session.user.image);
  }

  if (session?.user?.id && !userId) {
    setUserId(session.user.id);
  }

  return {
    session,
    userName,
    userEmail,
    userImage,
    userId,
  };
};

export default useSessionUser;
