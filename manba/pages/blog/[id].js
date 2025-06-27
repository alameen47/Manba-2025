import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

// This is a placeholder for fetching blog post data.
// In a real application, you would fetch this from your CMS or database.
const fetchPostById = async (id) => {
  // Dummy data
  const posts = {
    '1': { 
      title: 'The Importance of Islamic Education', 
      content: '<p>Seeking knowledge is an obligation upon every Muslim. This article delves into the profound significance of education within the Islamic tradition, drawing from the Qur\'an and the Sunnah of the Prophet Muhammad (peace be upon him). It explores how knowledge illuminates the path to righteousness, strengthens faith, and empowers individuals to contribute positively to society.</p><p>We will also discuss the different types of knowledge, the etiquette of a student, and the role of scholars in preserving and transmitting the legacy of Islam.</p>',
      author: 'Sheikh Adam Abdullah',
      date: 'June 20, 2025',
      imageUrl: '/profile.jpg' // Use a relevant image for the blog post
    },
    '2': { 
      title: 'Ramadan Reflections', 
      content: '<p>The month of Ramadan is a time for spiritual rejuvenation, a period to reconnect with Allah and the Qur\'an. This post shares reflections on making the most of this blessed month. From the importance of fasting and prayer to acts of charity and kindness, we explore practical tips to enhance your spiritual experience.</p><p>Join us as we reflect on the lessons of patience, gratitude, and self-discipline that Ramadan teaches us, and how to carry these virtues forward throughout the year.</p>',
      author: 'Dr. Maryam Bello',
      date: 'June 15, 2025',
      imageUrl: '/profile.jpg' // Use a relevant image for the blog post
    },
  };
  return posts[id] || null;
};


const BlogPostPage = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <Head>
        <title>{post.title} - The Fountain Al-Manba Media</title>
        <meta name="description" content={post.content.substring(0, 160)} />
      </Head>

      <div className="container mx-auto py-12 px-4">
        <article>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600 mb-6">
            <Image src={post.imageUrl} alt={post.author} width={40} height={40} className="rounded-full" />
            <p className="ml-3">By {post.author} on {post.date}</p>
          </div>
          
          {/* Render HTML content safely */}
          <div 
            className="prose lg:prose-xl max-w-none" 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const post = await fetchPostById(id);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}

export default BlogPostPage;
