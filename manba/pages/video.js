import Head from 'next/head';
import VideoEmbed from '../components/VideoEmbed';

const VideosPage = () => {
  // Using the URLs from the prompt, and the metadata retrieved earlier.
  const videos = [
    {
      url: 'http://www.youtube.com/watch?v=temYOI-V6uQ',
      title: 'THE TEMPTATIONS OF THE TIME AND SURVIVAL TIPS BY SHEIKH ISA AKINDELE SOLAHUDEEEN',
    },
    {
       url: 'http://www.youtube.com/watch?v=CwVCUo0JE1Q',
      title: 'Couple Rights An Empirical and Critical Discourse by Dr. Sirajudeen Asrau Bilal',
    },
    {
       url: 'http://www.youtube.com/watch?v=lAqxxxTOo1U',
      title: "Ta'aliq Sheikh Isa Akindele @ OTM Annual Seminar Formal Opening Iseyin,2019",
    },
  ];

  return (
    <div>
      <Head>
        <title>Videos - The Fountain Al-Manba Media</title>
        <meta name="description" content="Videos from The Fountain Al-Manba Media, a media outlet of Organisation of Tadhamunil Muslimeen (OTM), Nigeria." />
      </Head>

      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Videos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <VideoEmbed key={video.url} url={video.url} title={video.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideosPage;
