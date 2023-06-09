import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '~/lib/prisma';

const getAllTags = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const tags = await prisma.tag.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      });

      res.status(200).json(tags);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching tags', details: error });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default getAllTags;
