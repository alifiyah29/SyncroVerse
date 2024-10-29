# CollabConnect - Real-Time Collaborative Workspace

### Project Overview
CollabConnect is a platform designed for real-time collaborative document editing with features like role-based permissions, real-time chat, Google OAuth authentication, document versioning, and autosave. This project leverages:

- **Frontend**: Next.js, Tailwind CSS, Axios
- **Backend**: Node.js, Socket.io for real-time communication
- **Database**: MongoDB for storage and version control
- **Authentication**: Google OAuth 2.0
- **Cloud & Hosting**: AWS (EC2, S3, Lambda)

### Project Phases

**Part 1: Frontend Development with Next.js**

- **Phase 1**: Initial Setup  
  - Set up Next.js with TypeScript, ESLint, Prettier, and Tailwind CSS.
  - Establish folder structure for components, pages, and utilities.

- **Phase 2**: UI & Component Development  
  - Create login and registration pages with placeholders for Google OAuth.
  - Design the main dashboard, document editor layout, and chat interface.

- **Phase 3**: State Management & Placeholder API Integration  
  - Integrate Redux for user sessions, active documents, and chat.
  - Create placeholder APIs for authentication, document loading, and chat messaging.

### Getting Started
1. **Install dependencies**: `npm install`
2. **Run the project**: `npm run dev`
3. **Access the app**: Open [http://localhost:3000](http://localhost:3000) in your browser