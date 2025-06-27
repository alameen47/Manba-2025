import Head from 'next/head';
import { useState } from 'react';

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, you would call Firebase Auth here
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
       <div>
        <Head>
          <title>Admin Login - The Fountain Al-Manba Media</title>
        </Head>
        <div className="container mx-auto py-20 flex justify-center items-center">
          <div className="w-full max-w-xs">
            <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="username" type="email" placeholder="admin@email.com" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" id="password" type="password" placeholder="******************" />
              </div>
              <div className="flex items-center justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>Admin Dashboard - The Fountain Al-Manba Media</title>
      </Head>
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="mt-4">Welcome to the admin panel. Here you can manage news, blog posts, and videos.</p>
        {/* Add content management UI here */}
      </div>
    </div>
  );
};

export default AdminPage;
