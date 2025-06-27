import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" legacyBehavior>
              <a>
                <Image src="/logo.png" alt="The Fountain Al-Manba Media" width={150} height={50} />
              </a>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/news" legacyBehavior><a className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">News</a></Link>
              <Link href="/blog" legacyBehavior><a className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Blog</a></Link>
              <Link href="/videos" legacyBehavior><a className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Videos</a></Link>
              <Link href="/fiqh" legacyBehavior><a className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Fiqh</a></Link>
              <Link href="/about" legacyBehavior><a className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">About</a></Link>
              <Link href="/contact" legacyBehavior><a className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Contact</a></Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
