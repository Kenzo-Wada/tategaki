import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const createPost = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { title, content, image, published, authorId } = req.body;

    // Validation
    if (!authorId) {
      return res.status(400).json({ error: 'Author ID are required' });
    }

    try {
      const newPost = await prisma.post.create({
        data: {
          title,
          content,
          image,
          published,
          author: {
            connect: {
              id: authorId,
            },
          },
        },
      });

      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ error: 'Error creating the post', details: error });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default createPost;
