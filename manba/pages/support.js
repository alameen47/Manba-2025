import Head from 'next/head';

const SupportPage = () => {
  return (
    <div>
      <Head>
        <title>Support Us - The Fountain Al-Manba Media</title>
        <meta name="description" content="Support the work of The Fountain Al-Manba Media. Your contribution helps us continue our mission." />
      </Head>

      <div className="container mx-auto py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Support Our Da'wah</h1>
          <p className="text-lg text-gray-600 mb-8">
            The Fountain Al-Manba Media is committed to providing authentic Islamic content freely. Your generous support helps us cover our operational costs and expand our reach. Every contribution, no matter the size, makes a significant impact.
          </p>
          <a
            href="https://ko-fi.com/thefountainmedia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
          >
            Support us on Ko-fi
          </a>
          <p className="mt-8 text-gray-700">
            May Allah reward you abundantly for your support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
