// pages/api/liked_posts.js
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import useSessionUser from '~/hooks/useSessionUser';
import prisma from '~/lib/prisma';

const likedPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // Get the user session
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { session, userId } = await useSessionUser();

    if (!session) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    try {
      const likedPosts = await prisma.favorite.findMany({
        where: {
          userId: userId || '',
        },
        include: {
          post: true,
        },
      });

      // Extract only the post data from the favorites
      const posts = likedPosts.map((favorite) => favorite.post);

      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching liked posts', details: error });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default likedPosts;
