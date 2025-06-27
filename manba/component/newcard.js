import Link from 'next/link';

const NewsCard = ({ id, title, excerpt }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{excerpt}</p>
        <Link href={`/news/${id}`} legacyBehavior>
          <a className="text-blue-600 hover:underline">Read More</a>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
