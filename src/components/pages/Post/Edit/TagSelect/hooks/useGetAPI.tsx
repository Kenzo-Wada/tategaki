import { useCallback, useState } from 'react';

import type { Tag } from '~/lib/prisma';

interface HooksType {
  callAPI: () => Promise<{ tags: Tag[] | null }>;
}

const useGetAPI = (): HooksType => {
  const [tags, setTags] = useState<Tag[] | null>(null);

  const callAPI = useCallback(async () => {
    if (tags === null) {
      try {
        const response = await fetch(`/api/tags`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const fetchedTags = await response.json();
          setTags(fetchedTags);
        } else {
          throw new Error('Failed to fetch the tags');
        }
      } catch (error) {
        setTags(null);
      }
    }

    return {
      tags,
    };
  }, [tags]);

  return {
    callAPI,
  };
};

export default useGetAPI;
