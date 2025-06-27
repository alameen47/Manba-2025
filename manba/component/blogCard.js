import Link from 'next/link';
import Image from 'next/image';

const BlogCard = ({ id, title, excerpt }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-700 mb-4">{excerpt}</p>
        <Link href={`/blog/${id}`} legacyBehavior>
          <a className="font-semibold text-green-600 hover:text-green-800">Read More &rarr;</a>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
