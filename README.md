The Fountain Al-Manba Media Website
This is the official full-stack website for The Fountain Al-Manba Media, the media outlet of the Organisation of Tadhamunil Muslimeen (OTM) in Nigeria. The platform is built to disseminate authentic Islamic knowledge, news, articles, and multimedia content to the community.
The project is built with Next.js and uses Firebase for its backend services.
✨ Features
 * 📰 News Section: Display the latest news and announcements from OTM.
 * ✍️ Blog: A complete blog with dynamic routing for individual articles.
 * 🎥 Video Library: A dedicated page to showcase lectures and events from YouTube.
 * 📚 Fiqh Page: A section for articles and resources on Islamic Jurisprudence.
 * 📧 Contact Form: A fully functional contact form that saves submissions to a database.
 * 📫 Newsletter Subscription: Allows users to subscribe to a mailing list.
 * 🛡️ Admin Panel: A basic, secure area for content management (login required).
 * 🤝 Support Page: A page for users to support the media outlet via Ko-fi.
 * 📱 Fully Responsive Design: Mobile-first design that looks great on all devices.
 * SEO Optimized: Built with SEO best practices in mind using Next.js features.
🛠️ Tech Stack
 * Framework: Next.js
 * Styling: Tailwind CSS
 * Backend & Database: Firebase (Firestore, Firebase Authentication)
 * Deployment: Vercel
📂 Project Structure
The project follows a standard Next.js structure to keep the codebase organized and maintainable.
fountain-media/
├── components/         # Reusable React components (Navbar, Footer, Cards, etc.)
├── lib/                # Helper functions and Firebase SDK configurations
├── pages/              # All pages and API routes for the website
│   ├── api/            # Backend API routes (auth, blog, contact)
│   └── ...
├── public/             # Static assets (images, logos, favicon)
├── styles/             # Global CSS styles
├── .env.local          # Environment variables (MUST BE KEPT SECRET)
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies and scripts
└── README.md           # This file

🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.
Prerequisites
 * Node.js (version 16.x or later recommended)
 * npm or yarn package manager
 * A Firebase project.
1. Clone the Repository
First, clone the project from GitHub to your local machine:
git clone https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME>.git
cd fountain-media

2. Install Dependencies
Install all the required project dependencies:
npm install
# or
yarn install

3. Set Up Environment Variables
This is a critical step. The project relies on environment variables to connect to Firebase securely.
Create a new file named .env.local in the root of your project folder. Copy the contents of the example below and replace the placeholder values with your actual Firebase project credentials.
.env.local
# Firebase Client SDK Key (publicly accessible)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Firebase Admin SDK (server-side only, MUST be kept secret)
# 1. Generate a new private key in your Firebase project settings (Service Accounts).
# 2. Open the downloaded JSON file and copy its contents.
# 3. Encode the entire JSON content to a Base64 string. You can use an online tool like https://www.base64encode.org/
# 4. Paste the resulting Base64 string here.
FIREBASE_SERVICE_ACCOUNT_KEY=ewogICJuYW1lIjogImZvdW50YWluLW1lZGlhIiwKICAidmVyc2lvbiI6ICIwLjEuMCIsCiAgInByaXZhdGUiOiB0cnVlLAogICJzY3JpcHRzIjogewogICAgImRldiI6ICJuZXh0IGRldiIsCiAgICAiYnVpbGQiOiAibmV4dCBidWlsZCIsCiAgICAic3RhcnQiOiAibmV4dCBzdGFydCIsCiAgICAibGludCI6ICJuZXh0IGxpbnQiCiAgfSwKICAiZGVwZW5kZW5jaWVzIjogewogICAgIm5leHQiOiAiMTMuMC4wIiwKICAgICJyZWFjdCI6ICIxOC4yLjAiLAogICAgInJlYWN0LWRvbSI6ICIxOC4yLjAiLAogICAgImZpcmViYXNlIjogIjguMTAuMCIsCiAgICAidGFpbHdpbmRjc3MiOiAiMy4zLjMiLAogICAgImF1dG9wcmVmaXhlciI6ICIxMC40LjE2IiwKICAgICJwb3N0Y3NzIjogIjguNC4zMSIKICB9LAogICJkZXZEZXBlbmRlbmNpZXMiOiB7CiAgICAiZXNsaW50IjogIjguMjcuMCIsCiAgICAiZXNsaW50LWNvbmZpZy1uZXh0IjogIjEzLjAuMCIKICB9Cn0K

4. Run the Development Server
Now you can start the local development server:
npm run dev

Open your browser and navigate to http://localhost:3000 to see the website in action.
☁️ Deployment
This project is optimized for deployment on Vercel.
 * Push your code to a GitHub repository.
 * Import the repository into Vercel.
 * Important: Configure the same environment variables from your .env.local file in the Vercel project settings (Settings > Environment Variables).
 * Vercel will automatically build and deploy your site. Any subsequent pushes to the main branch will trigger a new deployment.
❤️ Support The Cause
The Fountain Al-Manba Media relies on community support to continue its work. Please consider making a contribution.
 * Support us on Ko-fi
📄 License
This project is licensed under the MIT License. See the LICENSE file for details.
 Manba-2025
