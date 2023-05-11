import { useEffect, useState } from 'react';

interface HooksType {
  posts: {
    id: string;
    title: string | null;
    content: string | null;
    image: string | null;
    published: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    authorId: string;
  }[];
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
