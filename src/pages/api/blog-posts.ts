import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/supabase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching blog posts' });
      }
      break;

    case 'POST':
      try {
        const { title, content, image_url, author_id } = req.body;
        
        const { data, error } = await supabase
          .from('blog_posts')
          .insert([
            {
              title,
              content,
              image_url,
              author_id,
            },
          ])
          .select();

        if (error) throw error;
        res.status(201).json(data[0]);
      } catch (error) {
        res.status(500).json({ error: 'Error creating blog post' });
      }
      break;

    case 'DELETE':
      try {
        const { id } = req.query;
        const { error } = await supabase
          .from('blog_posts')
          .delete()
          .eq('id', id);

        if (error) throw error;
        res.status(200).json({ message: 'Post deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Error deleting blog post' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}