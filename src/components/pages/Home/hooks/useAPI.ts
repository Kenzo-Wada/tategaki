import { useEffect, useState } from 'react';

import type { Post, User } from '~/lib/prisma';

type PostType = Post & {
  author: User;
};

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
