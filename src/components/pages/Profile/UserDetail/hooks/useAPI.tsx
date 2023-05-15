import { useEffect, useState } from 'react';

import type { User } from '~/lib/prisma';

type UserType = User & {
  followersCount: number;
  followingCount: number;
};

interface HooksType {
  user: UserType | null;
  error: string | null;
}

const useAPI = (id: string | string[] | undefined): HooksType => {
  const [user, setUser] = useState<UserType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/user/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Failed to fetch user');
        }
      })
      .then((data) => setUser(data))
      .catch((err) => setError(err.message));
  }, [id]);

  return {
    user,
    error,
  };
};

export default useAPI;
