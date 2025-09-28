# THINKBOARD - MERN Notes App

A full-stack note-taking application built with MongoDB, Express, React, and Node.js (MERN). This project demonstrates REST API design, CRUD operations, rate limiting, and deployment to production.

## Features

- REST API backend for creating, reading, updating, and deleting notes
- Express server with modular routes/controllers
- MongoDB for persistent storage (via Mongoose)
- Responsive React frontend
- Upstash Redis for API rate limiting
- Deployment instructions included

## Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- React
- Upstash Redis
- Nodemon (for development)

## Folder Structure

backend/
src/
controllers/
models/
routes/
server.js
frontend/
(standard React app files)


## Setup Instructions

### Backend

1. `cd backend`
2. `npm install`
3. Create a `.env` with your MongoDB URI, Upstash, etc.
4. `npm run dev`

### Frontend

1. `cd frontend`
2. `npm install`
3. `npm start`

Visit http://localhost:3000 to use the app.

## API Endpoints

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | /api/notes       | Fetch all notes          |
| POST   | /api/notes       | Create a new note        |
| PUT    | /api/notes/:id   | Update an existing note  |
| DELETE | /api/notes/:id   | Delete a note            |

All endpoints return data in JSON format.

## Deployment

- Build the React frontend: `npm run build`
- Connect to MongoDB Atlas
- Configure production environment variables
- Deployed in render.com
  
