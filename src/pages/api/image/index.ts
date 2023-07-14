import type { NextApiRequest, NextApiResponse } from 'next';

import supabase from '~/lib/supabase';

const postImage = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { image, postId } = req.body;

    // Validation
    if (!postId) {
      return res.status(400).json({ error: 'Post ID is required' });
    }

    try {
      const { data, error } = await supabase.from('posts').update({ image }).match({ id: postId });

      if (error) {
        throw error;
      }

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Error updating the post image', details: error });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
