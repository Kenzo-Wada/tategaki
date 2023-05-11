import type { NextPage } from 'next';
import { memo } from 'react';

import PostPage from '~/components/pages/Post';

const Post: NextPage = memo(() => {
  return <PostPage />;
});

Post.displayName = 'Post';

export default Post;
