import Head from 'next/head';
import { useState } from 'react';

const NewsletterPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the email to your API endpoint
    // e.g., await fetch('/api/newsletter', { method: 'POST', ... })
    setMessage(`Thank you for subscribing, ${email}!`);
    setEmail('');
  };

  return (
    <div>
      <Head>
        <title>Newsletter - The Fountain Al-Manba Media</title>
        <meta name="description" content="Subscribe to our newsletter for the latest updates from The Fountain Al-Manba Media." />
      </Head>

      <div className="container mx-auto py-12">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h1>
          <p className="text-lg text-gray-600 mb-8">
            Stay up-to-date with our latest news, articles, and videos.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full md:w-auto flex-grow appearance-none border rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
            >
              Subscribe
            </button>
          </form>
          {message && <p className="mt-4 text-green-700">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default NewsletterPage;
