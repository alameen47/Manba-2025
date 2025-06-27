import Head from 'next/head';

const TermsPage = () => {
  return (
    <div>
      <Head>
        <title>Terms of Service - The Fountain Al-Manba Media</title>
      </Head>
      <div className="container mx-auto py-12 px-4 prose lg:prose-lg">
        <h1>Terms of Service</h1>
        <p><em>Last updated: June 26, 2025</em></p>
        
        <h2>1. Introduction</h2>
        <p>Welcome to The Fountain Al-Manba Media. These Terms of Service govern your use of our website. By accessing it, you agree to these terms. If you disagree with any part, you may not access the Service.</p>

        <h2>2. Intellectual Property Rights</h2>
        <p>Other than the content you own, under these Terms, The Fountain Al-Manba Media and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material.</p>

        <h2>3. Restrictions</h2>
        <p>You are specifically restricted from all of the following:</p>
        <ul>
            <li>Publishing any Website material in any other media without prior consent.</li>
            <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
            <li>Using this Website in any way that is or may be damaging to this Website.</li>
            <li>Using this Website contrary to applicable laws and regulations.</li>
        </ul>

        <h2>4. No warranties</h2>
        <p>This Website is provided "as is," with all faults, and we express no representations or warranties, of any kind related to this Website or the materials contained on this Website.</p>

        <h2>5. Governing Law & Jurisdiction</h2>
        <p>These Terms will be governed by and interpreted in accordance with the laws of Nigeria, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Nigeria for the resolution of any disputes.</p>
      </div>
    </div>
  );
};

export default TermsPage;
