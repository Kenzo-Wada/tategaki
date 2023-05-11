import { useRouter } from 'next/router';
import { memo } from 'react';

const PostPage = memo(() => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <p>Post: {id}</p>
    </div>
  );
});

PostPage.displayName = 'PostPage';

export default PostPage;
