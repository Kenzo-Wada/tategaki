// pages/api/posts/[id].ts
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const updatePostById = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (req.method === 'PUT') {
    try {
      const { tags, ...updatedData } = req.body;

      // Update post information
      const post = await prisma.post.update({
        where: { id: String(id) },
        data: updatedData,
      });

      if (!post) {
        res.status(404).json({ error: 'Post not found' });
        return;
      }

      // Update post tags
      if (tags && Array.isArray(tags)) {
        // Remove existing post tags
        await prisma.postTag.deleteMany({
          where: { postId: post.id },
        });

        // Add new post tags
        const newTags = tags.map((tag) =>
          prisma.postTag.create({
            data: {
              postId: post.id,
              tagId: tag.id,
            },
          })
        );

        await prisma.$transaction(newTags);
      }

      // Fetch updated post with tags
      const updatedPost = await prisma.post.findUnique({
        where: { id: String(id) },
        include: {
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
      });

      res.status(200).json({
        ...updatedPost,
        tags: updatedPost?.tags.map((postTag) => postTag.tag),
      });
    } catch (error) {
      res.status(500).json({ error: 'Error updating the post', details: error });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default updatePostById;
