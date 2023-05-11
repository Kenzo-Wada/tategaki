import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const addTag = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { postId, tagName } = req.body;

    // Validation
    if (!postId || !tagName) {
      return res.status(400).json({ error: 'Post ID and Tag name are required' });
    }

    try {
      // Find or create the tag
      const tag = await prisma.tag.upsert({
        where: { name: tagName },
        update: {},
        create: { name: tagName },
      });

      // Add the tag to the post
      await prisma.postTag.create({
        data: {
          postId: postId,
          tagId: tag.id,
        },
      });

      res.status(201).json({ message: 'Tag added successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error adding the tag', details: error });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default addTag;
