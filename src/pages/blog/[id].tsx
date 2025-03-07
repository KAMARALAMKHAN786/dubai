import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { supabase } from '../../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  image_url: string;
  created_at: string;
}

interface BlogPostProps {
  blogPost: BlogPost | null;
}

const BlogPostDetails: React.FC<BlogPostProps> = ({ blogPost }) => {
  if (!blogPost) {
    return (
      <div className="min-h-screen bg-[#33343b] flex items-center justify-center">
        <p className="text-gray-300 text-lg">Blog post not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#33343b] py-16">
      <Head>
        <title>{blogPost.title} | My Blog</title>
        <meta name="description" content={blogPost.content.slice(0, 160)} />
        <meta property="og:title" content={blogPost.title} />
        <meta property="og:description" content={blogPost.content.slice(0, 160)} />
        <meta property="og:image" content={blogPost.image_url} />
        <meta property="og:url" content={`https://www.delhi-escorts.com/blog/${blogPost.id}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogPost.title} />
        <meta name="twitter:description" content={blogPost.content.slice(0, 160)} />
        <meta name="twitter:image" content={blogPost.image_url} />
      </Head>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <time className="text-gray-400 text-sm">
            {new Date(blogPost.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <h1 className="text-4xl font-bold text-white mt-2 mb-6 leading-tight">
            {blogPost.title}
          </h1>
        </div>

        {blogPost.image_url && (
          <div className="mb-12 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <img 
              src={blogPost.image_url} 
              alt={blogPost.title} 
              className="w-full h-96 object-cover"
              loading="eager"
            />
          </div>
        )}

        <div className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed">
          {blogPost.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-6">{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: blogPosts } = await supabase
    .from('blog_posts')
    .select('id');

  const paths = blogPosts?.map((post) => ({
    params: { id: post.id.toString() },
  })) || [];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data: blogPost } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('id', id)
    .single();

  return {
    props: {
      blogPost: blogPost || null,
    },
  };
};

export default BlogPostDetails;