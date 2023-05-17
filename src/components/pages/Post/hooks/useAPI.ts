import { useEffect, useState } from 'react';

import type { Post, User } from '~/lib/prisma';

type PostType = Post & {
  author: User;
  tags: string[];
};

interface HooksType {
  post: PostType | null;
  error: string | null;
}

const useAPI = (id: string | string[] | undefined): HooksType => {
  const [post, setPost] = useState<PostType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Failed to fetch the post');
        }
      })
      .then((data) => setPost(data))
      .catch((err) => setError(err.message));
  }, [id]);

  return {
    post,
    error,
  };
};

export default useAPI;
