import type { NextPage } from 'next';
import { memo } from 'react';

import PostEditPage from '~/components/pages/Post/Edit';

const PostEdit: NextPage = memo(() => {
  return <PostEditPage />;
});

PostEdit.displayName = 'PostEdit';

export default PostEdit;
