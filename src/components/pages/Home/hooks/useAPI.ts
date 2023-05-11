import { useEffect, useState } from 'react';

import type { Post } from '~/lib/prisma';

interface HooksType {
  posts: Post[];
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
