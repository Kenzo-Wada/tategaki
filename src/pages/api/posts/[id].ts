import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

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
            include: {
              tag: true,
            },
          },
        },
      });

      const postWithTags = {
        ...post,
        tags: post?.tags.map((postTag) => postTag.tag),
      };

      if (!post) {
        res.status(404).json({ error: 'Post not found' });
      } else {
        res.status(200).json(postWithTags);
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching the post', details: error });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default getPostById;
