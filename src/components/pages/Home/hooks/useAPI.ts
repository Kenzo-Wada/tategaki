import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import type { Post, User } from '~/lib/prisma';

export type PostType = Post & {
  author: User;
  likesCount: number;
  currentUserLikes: boolean;
  tags: {
    tag: {
      id: string;
      name: string;
    };
  }[];
};

interface HooksType {
  posts: PostType[];
  loading: boolean;
}

const useAPI = (): HooksType => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const session = await getSession();
        const res = await fetch(`/api/posts?userId=${session?.user.id}`);
        const data: PostType[] = await res.json(); // Ensure the response data is of type PostType[]
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return {
    posts,
    loading,
  };
};

export default useAPI;
