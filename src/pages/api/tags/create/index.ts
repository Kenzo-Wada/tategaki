import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const createTag = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name } = req.body;

    // Validation
    if (!name) {
      return res.status(400).json({ error: 'Tag name is required' });
    }

    try {
      const newTag = await prisma.tag.create({
        data: { name },
      });

      res.status(201).json(newTag);
    } catch (error) {
      res.status(500).json({ error: 'Error creating the tag', details: error });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default createTag;
