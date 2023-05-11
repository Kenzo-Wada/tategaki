import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const createPostTag = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { postId, tagId } = req.body;

    // Validation
    if (!postId || !tagId) {
      return res.status(400).json({ error: 'Post ID and Tag ID are required' });
    }

    try {
      const newPostTag = await prisma.postTag.create({
        data: {
          postId: postId,
          tagId: tagId,
        },
      });

      res.status(201).json(newPostTag);
    } catch (error) {
      res.status(500).json({ error: 'Error creating the post tag', details: error });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default createPostTag;
