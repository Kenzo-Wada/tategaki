import { useCallback } from 'react';

const useFavoriteAPI = () => {
  const addLike = useCallback(async (postId: string, userId: string | null) => {
    const response = await fetch('/api/favorite/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ postId, userId }),
    });

    if (!response.ok) {
      console.log(userId);
      throw new Error('Failed to add like');
    }
  }, []);

  const removeLike = useCallback(async (postId: string, userId: string | null) => {
    const response = await fetch('/api/favorite/remove', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ postId, userId }),
    });

    if (!response.ok) {
      throw new Error('Failed to remove like');
    }
  }, []);

  return { addLike, removeLike };
};

export default useFavoriteAPI;
