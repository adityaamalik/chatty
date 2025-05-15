# Chatty - Real-time Chat Application

A modern real-time chat application built with the MERN stack, featuring instant messaging, user authentication, and real-time updates.

## Author

**Aditya Malik**

## Tech Stack

### Frontend

- React.js with Vite
- Zustand for state management
- TailwindCSS with DaisyUI for styling
- Socket.io-client for real-time communication
- React Router for navigation
- React Hot Toast for notifications

### Backend

- Node.js with Express
- MongoDB with Mongoose
- Socket.io for real-time features
- JWT for authentication
- Cloudinary for image uploads
- Bcrypt for password hashing

## Features

- Real-time messaging
- User authentication (signup/login)
- Profile management with image upload
- Online/offline user status
- Message history
- Responsive design
- Secure password handling
- Protected routes

## Technical Implementation Details

### Authentication

- JWT-based authentication with HTTP-only cookies
- Secure password hashing using bcrypt
- Protected API routes with middleware

### Real-time Communication

- WebSocket implementation using Socket.io
- Real-time message delivery
- Online user tracking
- Instant status updates

### Data Management

- MongoDB for data persistence
- Mongoose schemas for data validation
- Efficient querying and indexing

### Security

- CORS configuration
- Environment variable management
- Secure cookie settings
- Input validation and sanitization

### Image Handling

- Cloudinary integration for image uploads
- Base64 image processing
- Optimized image delivery

## Getting Started

1. Clone the repository
2. Install dependencies:

   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Set up environment variables in backend/.env:
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```
4. Start the development servers:

   ```bash
   # Start backend server
   cd backend
   npm run dev

   # Start frontend server
   cd frontend
   npm run dev
   ```

## Architecture

The application follows a client-server architecture with:

- RESTful API endpoints for CRUD operations
- WebSocket connections for real-time features
- State management using Zustand
- Component-based UI architecture

## Performance Considerations

- Optimized image uploads
- Efficient state management
- Real-time updates without polling
- Responsive design for all devices
