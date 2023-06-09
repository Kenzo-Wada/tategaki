import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '~/lib/prisma';

const getPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { currentUserId, userId } = req.query;
    try {
      const posts = await prisma.post.findMany({
        where: {
          OR: [
            { published: true },
            {
              authorId: {
                equals: String(currentUserId),
                mode: 'insensitive',
              },
            },
          ],
          authorId: String(userId),
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

      const postsWithUserLikesAndCount = await Promise.all(
        posts.map(async (post) => {
          const userLike = await prisma.favorite.findFirst({
            where: {
              AND: [{ userId: String(currentUserId) }, { postId: post.id }],
            },
          });
          const likesCount = await prisma.favorite.count({
            where: { postId: post.id },
          });
          return { ...post, currentUserLikes: Boolean(userLike), likesCount };
        })
      );

      res.status(200).json(postsWithUserLikesAndCount);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching posts', details: error });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default getPosts;
