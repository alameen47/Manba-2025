import { useRouter } from 'next/router';

const NewsArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;

  // This would fetch the specific news article based on the ID
  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold">News Article Title for ID: {id}</h1>
      <p className="mt-4 text-lg">This is the full content of the news article.</p>
    </div>
  );
};

export default NewsArticlePage;
