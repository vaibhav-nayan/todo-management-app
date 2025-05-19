
# 📝 Collaborative Todo List with Organizations and Task Management

A full-featured, real-time task collaboration tool built for teams and organizations. Create organizations, manage teams, assign tasks, track progress, and collaborate with comments and file attachments — all in one platform.

## 🚀 Features

### 👥 Organizations & Teams
- Create and manage organizations.
- Organize members into multiple teams.
- Role-based access control (Admin, Manager, Member).

### ✅ Task Management
- Create, update, and delete tasks.
- Assign tasks to specific team members.
- Set due dates, priorities, and task statuses.
- Filter tasks by assignee, status, or team.

### 💬 Collaboration Tools
- Add comments to tasks for team discussion.
- Upload and attach files to tasks.

### 🔔 Notifications & Reminders
- Set task reminders (via cron).
- Get real-time in-app notifications via WebSockets.

### 📊 Progress Tracking
- View task completion stats by team or organization.

## 🛠️ Tech Stack

| Layer      | Technologies |
|------------|--------------|
| **Frontend** | React.js, TypeScript, Redux Toolkit, Tailwind CSS, Axios, WebSocket |
| **Backend**  | Node.js, Express.js, PostgreSQL, Prisma ORM, node-cron, WebSocket |
| **Auth**     | JWT / OAuth (TBD) |
| **Deployment** | Docker (optional), Vercel / Render / Railway (suggested) |

## 📂 Project Structure

\`\`\`
.
├── client/               # Frontend (React + Vite + TS)
│   ├── src/
│   │   ├── components/
│   │   ├── features/     # Redux slices
│   │   ├── pages/
│   │   ├── api/          # Axios instances
│   │   └── utils/
│   └── index.html
├── server/               # Backend (Node.js + Express + Prisma)
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── services/
│   │   └── cron/
│   └── prisma/           # Prisma schema & migrations
├── .env
└── README.md
\`\`\`

## 🧪 Getting Started

### 🔧 Prerequisites

- Node.js ≥ 18.x
- PostgreSQL
- (Optional) Docker

### 🚚 Clone the Repository

\`\`\`bash
git clone https://github.com/yourusername/collaborative-todo-app.git
cd collaborative-todo-app
\`\`\`

### ⚙️ Backend Setup

\`\`\`bash
cd server
npm install

# Setup environment variables
cp .env.example .env

# Migrate the database
npx prisma migrate dev --name init

# Start the server
npm run dev
\`\`\`

### 🎨 Frontend Setup

\`\`\`bash
cd client
npm install

# Start the Vite development server
npm run dev
\`\`\`

## 🛡️ Environment Variables

Example \`.env\` for backend (\`server/.env\`):

\`\`\`
DATABASE_URL="postgresql://user:password@localhost:5432/todo_app"
JWT_SECRET="your_secret_key"
PORT=5000
\`\`\`

## 📌 Roadmap

- [ ] OAuth / Google Sign-In
- [ ] Email notifications
- [ ] Activity logs and audit trails
- [ ] Mobile responsiveness
- [ ] Dockerized deployment

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues and feature requests are welcome!  
Feel free to [open an issue](https://github.com/vaibhav-nayan/todo-management-app/issues).

## 📬 Contact

For feedback or questions: [visualart013@gmail.com](mailto:visualart013@gmail.com)

> Made with ❤️ for better teamwork.
