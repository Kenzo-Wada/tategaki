import { useCallback, useState } from 'react';

import type { Post } from '~/lib/prisma';

interface HooksType {
  callAPI: (
    id: string,
    updatedData: {
      title?: string;
      content?: string;
      image?: string;
      published?: boolean;
      authorId?: string;
      tags?: {
        id: string;
        name?: string;
      }[];
    }
  ) => Promise<{ updatedPost: Post | null }>;
}

const usePutAPI = (): HooksType => {
  const [updatedPost, setUpdatedPost] = useState<Post | null>(null);

  const callAPI = useCallback(
    async (
      id: string,
      updatedData: {
        title?: string;
        content?: string;
        image?: string;
        published?: boolean;
        authorId?: string;
        tags?: {
          id: string;
          name?: string;
        }[];
      }
    ) => {
      try {
        const response = await fetch(`/api/posts/create/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedData),
        });

        if (response.ok) {
          const post = await response.json();
          setUpdatedPost(post);
        } else {
          throw new Error('Failed to update the post');
        }
      } catch (error) {
        setUpdatedPost(null);
      }

      return {
        updatedPost,
      };
    },
    [updatedPost]
  );

  return {
    callAPI,
  };
};

export default usePutAPI;
