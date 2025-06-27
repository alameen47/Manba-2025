import Head from 'next/head';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>About Us - The Fountain Al-Manba Media</title>
        <meta name="description" content="Learn about The Fountain Al-Manba Media, a media outlet of Organisation of Tadhamunil Muslimeen (OTM), Nigeria." />
      </Head>

      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About The Fountain Al-Manba Media</h1>

        <div className="md:flex md:items-center md:space-x-8">
          <div className="md:w-1/2">
             <Image 
              src="/profile.jpg" // Replace with a more appropriate image
              alt="About Us Image" 
              width={500} // Adjust as needed
              height={300} // Adjust as needed
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-4">
              The Fountain Al-Manba Media is a dedicated media outlet operating under the Organisation of Tadhamunil Muslimeen (OTM) in Nigeria. 
              Our mission is to disseminate authentic Islamic knowledge, provide insightful news, and foster a deeper understanding of Islamic principles within our community and beyond.
            </p>
            <p className="text-lg text-gray-700">
              We strive to present information with accuracy, clarity, and relevance, catering to the diverse needs of our audience.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Objectives</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>To provide reliable and up-to-date news and information.</li>
            <li>To promote Islamic teachings and values.</li>
            <li>To engage in constructive dialogue and address contemporary issues.</li>
            <li>To serve as a platform for diverse voices within the Muslim community.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
