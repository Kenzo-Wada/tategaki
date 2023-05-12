import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import useSessionUser from '~/hooks/useSessionUser';

const prisma = new PrismaClient();

const getOwnedPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { userId } = useSessionUser();

  if (req.method === 'GET') {
    try {
      const posts = await prisma.post.findMany({
        where: {
          authorId: userId || undefined,
        },
        include: {
          author: true,
          like: true,
          tags: {
            select: {
              tag: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
        orderBy: { created_at: 'desc' },
      });
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching posts', details: error });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default getOwnedPosts;
