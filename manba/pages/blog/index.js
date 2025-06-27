import Head from 'next/head';
import BlogCard from '../../components/BlogCard';

const BlogPage = () => {
  // Replace with actual blog post data
  const blogPosts = [
    { id: '1', title: 'The Importance of Islamic Education', excerpt: 'A discussion on the significance of seeking knowledge in Islam...' },
    { id: '2', title: 'Ramadan Reflections', excerpt: 'Thoughts and insights on the blessed month of Ramadan...' },
  ];

  return (
    <div>
      <Head>
        <title>Blog - The Fountain Al-Manba Media</title>
        <meta name="description" content="The Fountain Al-Manba Media Blog - Articles and insights from Organisation of Tadhamunil Muslimeen (OTM), Nigeria." />
      </Head>

      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
