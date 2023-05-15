// pages/api/user/[id].js
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const userId = req.query.id;

  if (req.method === 'GET') {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: String(userId),
        },
        include: {
          following: true,
          followers: true,
        },
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Calculate the counts of followers and followings
      const followersCount = user.followers.length;
      const followingCount = user.following.length;

      // Add the counts to the response
      const response = { ...user, followersCount, followingCount };

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching user', details: error });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
