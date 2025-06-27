import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold">The Fountain Al-Manba Media</h3>
            <p className="text-gray-400 mt-2">A media outlet of Organisation of Tadhamunil Muslimeen (OTM), Nigeria.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><Link href="/about" legacyBehavior><a className="text-gray-400 hover:text-white">About Us</a></Link></li>
              <li><Link href="/contact" legacyBehavior><a className="text-gray-400 hover:text-white">Contact Us</a></Link></li>
              <li><Link href="/support" legacyBehavior><a className="text-gray-400 hover:text-white">Support Us</a></Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Legal</h3>
            <ul className="mt-2 space-y-2">
              <li><Link href="/privacy" legacyBehavior><a className="text-gray-400 hover:text-white">Privacy Policy</a></Link></li>
              <li><Link href="/terms" legacyBehavior><a className="text-gray-400 hover:text-white">Terms of Service</a></Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} The Fountain Al-Manba Media. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
