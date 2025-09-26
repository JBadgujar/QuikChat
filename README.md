# QuikChat 💬

A real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring Socket.IO for real-time messaging, JWT authentication, and modern UI with TailwindCSS and DaisyUI.

## ✨ Features

- **Real-time Messaging**: Instant messaging using Socket.IO
- **User Authentication**: Secure signup/login with JWT tokens
- **Profile Management**: Upload and update profile pictures with Cloudinary
- **Online Status**: See who's online in real-time
- **Image Sharing**: Send images in chat messages
- **Responsive Design**: Modern UI with TailwindCSS and DaisyUI
- **Theme Support**: Multiple DaisyUI themes available
- **Message History**: Persistent chat history stored in MongoDB

## 🚀 Tech Stack

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database with Mongoose ODM
- **Socket.IO** - Real-time bidirectional communication
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Cloudinary** - Image upload and storage
- **Cookie Parser** - HTTP cookie parsing
- **CORS** - Cross-origin resource sharing

### Frontend

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Zustand** - State management
- **Socket.IO Client** - Real-time client
- **Axios** - HTTP client
- **TailwindCSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind component library
- **Lucide React** - Icon library
- **React Hot Toast** - Toast notifications

## 📁 Project Structure

```
QuikChat/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   └── message.controller.js
│   │   ├── lib/
│   │   │   ├── cloudinary.js
│   │   │   ├── db.js
│   │   │   ├── socket.js
│   │   │   └── utils.js
│   │   ├── middleware/
│   │   │   └── auth.middleware.js
│   │   ├── models/
│   │   │   ├── message.model.js
│   │   │   └── user.model.js
│   │   ├── routes/
│   │   │   ├── auth.route.js
│   │   │   └── message.route.js
│   │   ├── seeds/
│   │   │   └── user.seed.js
│   │   └── index.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AuthImagePattern.jsx
│   │   │   ├── ChatContainer.jsx
│   │   │   ├── ChatHeader.jsx
│   │   │   ├── MessageInput.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NoChatSelected.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── skeletons/
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── ProfilePage.jsx
│   │   │   ├── SettingsPage.jsx
│   │   │   └── SignUpPage.jsx
│   │   ├── store/
│   │   │   ├── useAuthStore.js
│   │   │   ├── useChatStore.js
│   │   │   └── useThemeStore.js
│   │   ├── lib/
│   │   │   ├── axios.js
│   │   │   └── utils.js
│   │   └── App.jsx
│   └── package.json
└── package.json
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Cloudinary account (for image uploads)

### 1. Clone the Repository

```bash
git clone https://github.com/JBadgujar/QuikChat.git
cd QuikChat
```

### 2. Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# JWT
JWT_SECRET=your_jwt_secret_key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Server
PORT=5001
NODE_ENV=development
```

### 3. Install Dependencies

#### Install all dependencies (recommended):

```bash
npm run build
```

#### Or install manually:

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 4. Run the Application

#### Development Mode:

```bash
# Start backend server (from backend directory)
cd backend
npm run dev

# Start frontend development server (from frontend directory)
cd frontend
npm run dev
```

#### Production Mode:

```bash
# Build and start (from root directory)
npm run build
npm start
```

The application will be available at:

- Frontend: `http://localhost:5173` (development)
- Backend: `http://localhost:5001`

## 🔧 API Endpoints

### Authentication

- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/check` - Check authentication status
- `PUT /api/auth/update-profile` - Update user profile

### Messages

- `GET /api/messages/users` - Get all users for sidebar
- `GET /api/messages/:id` - Get messages with specific user
- `POST /api/messages/send/:id` - Send message to user

## 🎨 Features Overview

### Real-time Messaging

- Instant message delivery using Socket.IO
- Online/offline user status
- Message read receipts

### Authentication System

- Secure JWT-based authentication
- Password hashing with bcryptjs
- Protected routes and middleware

### File Upload

- Profile picture upload via Cloudinary
- Image sharing in chat messages
- Automatic image optimization

### Modern UI/UX

- Responsive design for all screen sizes
- Multiple theme options with DaisyUI
- Loading skeletons and smooth animations
- Toast notifications for user feedback

## 🔒 Security Features

- JWT token-based authentication
- Password hashing with bcryptjs
- CORS protection
- Input validation and sanitization
- Secure cookie handling

## 🌐 Deployment

The application is configured for deployment with production optimizations:

- Static file serving for frontend build
- Environment-based configuration
- Production-ready build scripts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**JBadgujar**

- GitHub: [@JBadgujar](https://github.com/JBadgujar)

## 🙏 Acknowledgments

- Socket.IO for real-time communication
- Cloudinary for image management
- DaisyUI for beautiful UI components
- MongoDB for data persistence

---

⭐ Star this repository if you found it helpful!
