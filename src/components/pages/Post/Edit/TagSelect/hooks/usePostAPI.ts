import { useCallback, useState } from 'react';

import type { Tag } from '~/lib/prisma';

interface HooksType {
  callPostAPI: (name: string) => Promise<{ tag: Tag | null }>;
}

const usePostAPI = (): HooksType => {
  const [tag, setTag] = useState<Tag | null>(null);

  const callPostAPI = useCallback(
    async (name: string) => {
      try {
        const response = await fetch(`/api/tags/create`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name }),
        });

        if (response.ok) {
          const tag = await response.json();
          setTag(tag);
        } else {
          throw new Error('Failed to fetch the post');
        }
      } catch (error) {
        setTag(null);
      }

      return {
        tag,
      };
    },
    [tag]
  );

  return {
    callPostAPI,
  };
};

export default usePostAPI;
