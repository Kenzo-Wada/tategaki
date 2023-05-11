import type { Post as PostType } from '@prisma/client';
import { useEffect, useState } from 'react';

interface HooksType {
  posts: PostType[];
}

const useAPI = (): HooksType => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return {
    posts,
  };
};

export default useAPI;
