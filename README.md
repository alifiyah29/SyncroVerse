# CollabConnect

CollabConnect is a real-time collaborative workspace built with Next.js. This project aims to provide seamless collaboration through document editing, chat functionality, and a user-friendly interface.

## Table of Contents

- [Phase 1: Initial Setup & Environment Configuration](#phase-1-initial-setup--environment-configuration)
- [Phase 2: UI & Component Development](#phase-2-ui--component-development)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Phase 1: Initial Setup & Environment Configuration

### Goal
Set up a development environment with Next.js, configure essential tools, and prepare the project’s core structure.

### Steps
1. **Initialize Next.js Project and Environment Configuration**
   - Installed Next.js, TypeScript, ESLint, Prettier, and Axios.
   - Set up ESLint and Prettier for consistent coding standards.
   - Configured TypeScript for type safety and better code quality.
   - Integrated Tailwind CSS for styling.

2. **Project Structure & Boilerplate Code**
   - Set up the folder structure for components, pages, utilities, and state management.
   - Created a README.md outlining the initial setup and any dependencies.

## Phase 2: UI & Component Development

### Goal
Design and implement core UI components like the authentication pages, dashboard, document editor layout, and real-time chat UI.

### Steps
1. **Authentication Pages**
   - Built login and registration pages, adding placeholders for Google OAuth integration.

2. **Main Dashboard Layout**
   - Designed a responsive dashboard with sections for active documents, notifications, and user activity.

3. **Document Editor Layout**
   - Created a basic, responsive document editor that will eventually support real-time collaboration.

4. **Chat Interface Layout**
   - Implemented a basic chat UI to display and send messages.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd collabconnect
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Usage

- Navigate to the login or registration pages to create an account or log in.
- After logging in, you'll be redirected to the main dashboard where you can view active documents, user activity, and access the document editor and chat interface.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
