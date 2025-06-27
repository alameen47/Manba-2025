import NewsCard from '../../components/NewsCard';

const NewsPage = () => {
  // This would typically fetch news from a backend/CMS
  const newsItems = [
    { id: '1', title: 'OTM Holds Annual Conference', excerpt: 'The annual conference of the Organisation of Tadhamunil Muslimeen was held in Lagos...' },
    { id: '2', title: 'New Educational Center Opened', excerpt: 'A new center for Islamic education has been inaugurated by OTM...' },
  ];

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map(item => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
