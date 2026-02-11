# PromptFlow 🚀

> Create & share your prompts effortlessly

A modern web application for creating, managing, and sharing AI prompts with the community. Built with Next.js and powered by MongoDB.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://prompt-peer-flow.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.8-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.9.0-green)](https://www.mongodb.com/)

## ✨ Features

- 🔐 **Secure Authentication** - User authentication powered by NextAuth.js
- 📝 **Create Prompts** - Easy-to-use interface for creating AI prompts
- 🌐 **Share with Community** - Share your prompts with other users
- 💾 **MongoDB Integration** - Reliable data storage with MongoDB & Mongoose
- 🎨 **Modern UI** - Beautiful, responsive design with Tailwind CSS
- ⚡ **Fast Performance** - Built on Next.js 14 for optimal speed

## 🚀 Live Demo

Check out the live application: [https://prompt-peer-flow.vercel.app/](https://prompt-peer-flow.vercel.app/)

## 🛠️ Tech Stack

- **Frontend:** Next.js 14, React 18, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** NextAuth.js
- **Security:** bcrypt for password hashing
- **Deployment:** Vercel

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn
- MongoDB database (local or cloud instance)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/withabhinay/PromptFlow.git
   cd PromptFlow
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory and add the following:
   ```env
   # MongoDB
   MONGODB_URI=your_mongodb_connection_string
   
   # NextAuth
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   
   # OAuth Providers (if using)
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
PromptFlow/
├── app/              # Next.js app directory (pages, layouts, routes)
├── components/       # Reusable React components
├── models/          # MongoDB/Mongoose models
├── public/          # Static assets
├── styles/          # Global styles and Tailwind CSS
├── utils/           # Utility functions and helpers
├── .gitignore       # Git ignore rules
├── jsconfig.json    # JavaScript configuration
├── next.config.mjs  # Next.js configuration
├── package.json     # Project dependencies
├── postcss.config.mjs    # PostCSS configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👤 Author

**Abhinay**

- GitHub: [@withabhinay](https://github.com/withabhinay)
- Website: [https://prompt-peer-flow.vercel.app/](https://prompt-peer-flow.vercel.app/)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Database powered by [MongoDB](https://www.mongodb.com/)
- Authentication via [NextAuth.js](https://next-auth.js.org/)

---

<p align="center">Made with ❤️ by Abhinay</p>
