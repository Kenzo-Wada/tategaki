import { useRouter } from 'next/router';
import { useEffect } from 'react';

import PostEditPage from '~/components/pages/Post/Edit';
import useSessionUser from '~/hooks/useSessionUser';

const NewPost = () => {
  const router = useRouter();
  const { userId } = useSessionUser();

  useEffect(() => {
    if (userId) {
      fetch('/api/posts/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          authorId: userId,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          router.push(`/post/${data.id}/edit`);
        });
    }
  }, [router, userId]);

  return <PostEditPage />;
};

export default NewPost;
