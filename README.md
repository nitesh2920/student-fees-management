# Student Fees Management System

This project is a full-stack web application for managing student fees, built with a React + TypeScript frontend and a Node.js + Express + TypeScript backend.

## Features
- User authentication (login/signup)
- Student profile management
- Fee payment and tracking
- Admin and student roles
- Secure API endpoints

## Tech Stack
- **Frontend:** React, TypeScript, Vite
- **Backend:** Node.js, Express, TypeScript,MongoDb

## Getting Started

### Prerequisites
- Node.js (v16 or above recommended)
- npm or yarn

### Installation

#### 1. Clone the repository
```sh
git clone https://github.com/nitesh2920/student-fees-management.git
cd student-fees-management
```

#### 2. Install dependencies
##### Backend
```sh
cd backend
npm install
```
##### Frontend
```sh
cd ../frontend
npm install
```


### Environment Variables (Backend)

Before running the backend, create a `.env` file in the `backend` directory with the following variables:

```env
MONGO_URI="your-mongodb-connection-string"
JWT_SECRET="your-jwt-secret"
PORT=5000
```

Example:
```env
MONGO_URI="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/"
JWT_SECRET="anything here"
PORT=5000
```

Replace the values as needed for your environment.

### Running the Application

#### Backend
```sh
cd backend
npm run dev
```

#### Frontend
```sh
cd frontend
npm run dev
```

The frontend will typically run on `http://localhost:5173` and the backend on `http://localhost:3000` (or as configured).

## API Routes

Below are the main backend API routes with example requests and descriptions:

| Method | Endpoint                | Description                        | Example Request Body           |
|--------|-------------------------|------------------------------------|-------------------------------|
| POST   | /api/auth/signup        | Register a new user                | `{ "name": "John", "email": "john@example.com", "password": "123456" }` |
| POST   | /api/auth/login         | Login and receive JWT token        | `{ "email": "john@example.com", "password": "123456" }` |
| GET    | /api/students           | Get all students (auth required)   | -                             |
| GET    | /api/students/profile   | Get current user's profile         | -                             |
| PUT    | /api/students/profile   | Update current user's profile      | `{ "name": "John Updated" }` |
| PUT    | /api/students/profile/pay-fees | Pay fees for current user | `{ "amount": 1000 }`          |

All routes under `/api/students` require authentication via JWT in the `Authorization` header: `Bearer <token>`.

## Project Structure
```
backend/
  src/
    controllers/
    middleware/
    models/
    routes/
    types/
frontend/
  src/
    components/
    lib/
    pages/
```


