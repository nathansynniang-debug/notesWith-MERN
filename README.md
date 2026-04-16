# 📒 Notes MERN Stack Application

A full‑stack **Notes Management Application** built with the **MERN stack (MongoDB, Express.js, React, Node.js)**. It allows users to create, edit, delete, and organize notes with authentication and a responsive UI.

---

## Features
- Create, Read, Update, Delete (CRUD) notes
- Responsive UI with React, using TailWindCSS
- RESTful API built with Express.js & Node.js
- MongoDB Database for persistent storage
- Optimized for scalability and modularity

---

## 🛠 Tech Stack
| Layer        | Technology             |
|--------------|------------------------|
| Frontend     | React.js, Tailwind CSS |
| Backend      | Node.js, Express.js    |
| Database     | MongoDB (Mongoose ORM) |
| Ratelimiter  | Redis (Upstash         |

---


## 📂 Project Structure

```
notesWith-MERN/
│
├── backend/          # Express server & API routes
│   ├── models/       # Mongoose schemas
│   ├── config/       # Configuration for Database Connection and Redis Limiter
│   ├── routes/       # API endpoints
│   ├── middleware/   # middleware for ratelimiting
│   └── controllers/  # CRUD logic
│
├── frontend/         # React client
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # App pages
│   │   └── lib/         # API calls
│
└── README.md
```
---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (>= 16.x)
- MongoDB (local or cloud via MongoDB Atlas)
- Git

### Steps

1. **Clone the repository**
   Open Command Prompt on Windows or bash on Linux or macOS terminal and use the following command:
   
   ```
   git clone https://github.com/nathansynniang-debug/notesWith-MERN.git
   cd notesWith-MERN
   ```

2. **Fill environment variables**
   Ensure the following environment variables are included in the backend directory
   ```
   PORT=5001               #you may use any available port, here 5001 is used
   MONGO_URI=              #use the URI of your mongoDB server
   UPSTASH_REDIS_REST_URL=   #obtain this from upstash
   UPSTASH_REDIS_REST_TOKEN=   #obtain from upstash
   NODE_ENV=production   #put it in production if available for production, else use any other string
   ```
   
4. **Compile for production**
   Ensure your System has npm installed and use the following command:
   ```
   npm run build
   ```

5. **Start the server**
   ```
   npm run start
   ```

Voila! You have successfully installed and run the full stack application. You may open the website on your own browser in http://localhost:5001/

## 🧪 API Endpoints (Backend)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Fetch all notes |
| POST | `/api/notes` | Create new note |
| PUT | `/api/notes/:id` | Update note |
| DELETE | `/api/notes/:id` | Delete note |

## Licence
This project is licensed under the GPL v3 Licence
