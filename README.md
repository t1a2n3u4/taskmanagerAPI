# Task Manager API

A **RESTful API** for managing tasks, built with **Node.js, Express.js, and MongoDB**.  
Supports **user authentication**, **task CRUD operations**, and **JWT-based protected routes**.

---

## **Features**

- **User Authentication**  
  - Signup (`POST /api/auth/signup`)  
  - Login (`POST /api/auth/login`)  
  - JWT authentication for protected routes  

- **Task Management (CRUD)**  
  - Create a task (`POST /api/tasks/`)  
  - Get all tasks (`GET /api/tasks/`)  
  - Get a task by ID (`GET /api/tasks/:id`)  
  - Update a task (`PUT /api/tasks/:id`)  
  - Delete a task (`DELETE /api/tasks/:id`)  

- **Validation**  
  - Task title minimum 3 characters  
  - Proper error messages for invalid requests  

- **Health Check**  
  - Endpoint: `GET /health`  
  - Returns API status  

---

## **Tech Stack**

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Atlas recommended for deployment)  
- **Authentication:** JWT, bcrypt  
- **Environment Variables:** `.env` file for sensitive configs  

---

## **Installation (Local)**

1. Clone the repo:  

```bash
git clone https://github.com/t1a2n3u4/taskmanagerAPI.git
cd taskmanagerAPI
Install dependencies:

npm install


Create .env file in root folder:

MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
PORT=5000


Start server:

npm start


Test API locally using Postman:

Signup: POST http://localhost:5000/api/auth/signup

Login: POST http://localhost:5000/api/auth/login

Tasks endpoints (JWT required)

Deployment

Deploy to Render, Railway, or any Node.js hosting platform

Set Environment Variables in deployment platform

Use MongoDB Atlas for live deployment

Live URL example:

https://taskmanager.onrender.com/api/auth/signup

Folder Structure
taskManager/
├─ controllers/      # Task & auth logic
├─ middlewares/      # Auth middleware
├─ models/           # MongoDB schemas
├─ routes/           # API routes
├─ server.js         # Entry point
├─ package.json
├─ .gitignore
└─ README.md

Author

Tanishka Mishra
