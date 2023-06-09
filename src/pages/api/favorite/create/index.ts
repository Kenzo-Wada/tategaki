import type { NextApiRequest, NextApiResponse } from 'next';

// import useSessionUser from '~/hooks/useSessionUser';

import prisma from '~/lib/prisma';

const addFavorite = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Get the user session
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const { session } = await useSessionUser();

    // if (!session) {
    //   return res.status(401).json({ message: 'Not authenticated' });
    // }

    const { postId, userId } = req.body;

    // Validation
    if (!postId) {
      return res.status(400).json({ error: 'Post ID is required' });
    }

    try {
      const newFavorite = await prisma.favorite.create({
        data: {
          postId: postId,
          userId: userId || '',
        },
      });

      res.status(201).json(newFavorite);
    } catch (error) {
      res.status(500).json({ error: 'Error adding the post to favorites', details: error });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default addFavorite;
