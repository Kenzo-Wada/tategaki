// pages/api/remove_favorite.js
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

// import useSessionUser from '~/hooks/useSessionUser';

const prisma = new PrismaClient();

const removeFavorite = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const { session, userId } = await useSessionUser();

    // if (!session) {
    //   return res.status(401).json({ message: 'Not authenticated' });
    // }

    const { postId, userId } = req.body;

    // Validation
    if (!postId) {
      return res.status(400).json({ error: 'Post ID is required' });
    }

    try {
      await prisma.favorite.deleteMany({
        where: {
          postId: postId,
          userId: userId || '',
        },
      });

      res.status(200).json({ message: 'Post removed from favorites' });
    } catch (error) {
      res.status(500).json({ error: 'Error removing the post from favorites', details: error });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default removeFavorite;
