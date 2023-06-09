import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '~/lib/prisma';

const createPost = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { title, content, image, published, authorId } = req.body;

    // Validation
    if (!authorId) {
      return res.status(400).json({ error: 'Author ID is required' });
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
        select: {
          id: true,
          title: true,
          content: true,
          image: true,
          published: true,
          authorId: true,
          created_at: true,
          updated_at: true,
          like: {
            select: {
              id: true,
            },
          },
          _count: {
            select: {
              like: true,
            },
          },
        },
      });

      const responsePost = {
        ...newPost,
        likedCount: newPost._count.like,
      };

      // // Remove the _count field from the response
      // delete responsePost._count;

      res.status(201).json(responsePost);
    } catch (error) {
      res.status(500).json({ error: 'Error creating the post', details: error });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default createPost;
