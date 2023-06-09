import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import prisma from '~/lib/prisma';

const getPostById = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const post = await prisma.post.findUnique({
        where: { id: String(id) },
        include: {
          author: true,
          like: true,
          tags: {
            select: {
              tag: true,
            },
          },
        },
      });

      // Check if the user is logged in
      const session = await getSession({ req });

      const postWithExtraInfo = {
        ...post,
        likesCount: post?.like.length, // count the number of likes
        tags: post?.tags.map((postTag) => postTag.tag.id), // get the tags
        currentUserLikes: session ? post?.like.some((like) => like.userId === session.user.id) : false, // check if the current user has liked the post
      };

      if (!post) {
        res.status(404).json({ error: 'Post not found' });
      } else {
        res.status(200).json(postWithExtraInfo);
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching the post', details: error });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default getPostById;
