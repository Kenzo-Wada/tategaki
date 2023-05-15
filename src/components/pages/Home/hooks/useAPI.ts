import { use, useEffect, useState } from 'react';

import useSessionUser from '~/hooks/useSessionUser';
import type { Post, User } from '~/lib/prisma';

export type PostType = Post & {
  author: User;
  likesCount: number;
  currentUserLikes: boolean;
};

interface HooksType {
  posts: PostType[];
  loading: boolean;
}

const useAPI = (): HooksType => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);
  const { userId } = useSessionUser();
  const [currentId, setCurrentId] = useState<string | null>(userId);

  useEffect(() => {
    if (userId !== null) {
      setCurrentId(userId);
    }
  }, [userId]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/posts?userId=${currentId}`);
        const data: PostType[] = await res.json(); // Ensure the response data is of type PostType[]
        setPosts(data);
        setLoading(false);
        console.log(currentId);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentId]);

  return {
    posts,
    loading,
  };
};

export default useAPI;
