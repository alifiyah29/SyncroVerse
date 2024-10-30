# CollabConnect - Real-Time Collaborative Workspace

## Project Overview
**CollabConnect** is a real-time collaborative platform designed to allow multiple users to simultaneously edit shared documents with minimal latency. It supports real-time chat, role-based permissions, secure Google OAuth-based authentication, document versioning, and autosave functionalities. CollabConnect is designed for collaborative workflows, offering an intuitive interface with responsive layouts for document management and communication.

## Features
- **Real-time Document Collaboration**: Synchronized document editing with live updates and role-based permissions.
- **Secure Authentication**: Integration with Google OAuth 2.0 for secure and easy login.
- **Real-time Chat**: In-app chat feature for seamless communication during collaboration.
- **Document Versioning & Autosave**: Track document history and auto-save changes to prevent data loss.
- **Scalability & Cloud Storage**: Hosted on AWS EC2 for scalable performance and AWS S3 for document storage.

## Tech Stack
### Frontend
- **Next.js**: Server-Side Rendering (SSR) and routing
- **Tailwind CSS**: Styling framework
- **Axios**: For API requests

### Backend
- **Node.js**: Backend runtime
- **Socket.io**: Real-time communication for document editing and chat
- **MongoDB**: Database for storing documents, versions, and chat history
- **Google OAuth 2.0**: Authentication mechanism

### Cloud & Hosting
- **AWS EC2**: Hosting and scalability
- **AWS S3**: Document storage
- **AWS Lambda**: Autosave and notifications

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js (v14+)
- MongoDB
- AWS account (if deploying to AWS)
- Google Cloud credentials for OAuth (for authentication setup)

### Installation
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/CollabConnect.git
   cd CollabConnect
   ```

2. **Frontend Setup**
   - Navigate to the frontend directory and install dependencies:
     ```bash
     cd frontend
     npm install
     ```
   - Configure environment variables in `.env.local` for frontend, such as API endpoints and OAuth credentials.

3. **Backend Setup**
   - Navigate to the backend directory and install dependencies:
     ```bash
     cd backend
     npm install
     ```
   - Configure environment variables in `.env`:
     ```
     MONGO_URI=your_mongo_db_uri
     GOOGLE_CLIENT_ID=your_google_client_id
     GOOGLE_CLIENT_SECRET=your_google_client_secret
     SESSION_SECRET=your_session_secret
     ```

4. **Run the Application**
   - **Frontend**:
     ```bash
     npm run dev
     ```
   - **Backend**:
     ```bash
     npm start
     ```

5. **Accessing the App**
   - Once both servers are running, open [http://localhost:3000](http://localhost:3000) in your browser to access CollabConnect.

### Additional Setup for Cloud Hosting
- **AWS EC2 and S3** configurations should be set up according to AWS guidelines for deployment and storage.
- Configure AWS Lambda functions for autosave and notification features.

## License
This project is licensed under the MIT License.
