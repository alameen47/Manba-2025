import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Fountain Al-Manba Media</title>
        <meta name="description" content="The Fountain Al-Manba Media - A media outlet of Organisation of Tadhamunil Muslimeen (OTM), Nigeria." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Welcome to The Fountain Al-Manba Media
        </h1>
        <p className="text-center text-lg text-gray-600 mt-4">
          Your source for authentic Islamic knowledge and news from the Organisation of Tadhamunil Muslimeen (OTM), Nigeria.
        </p>
      </main>
    </div>
  )
}
