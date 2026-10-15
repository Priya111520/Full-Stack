# Assignment 8: Student Management REST API

## Objective
The objective of this assignment is to develop a clean, beginner-friendly RESTful API using **Node.js**, **Express.js**, and a locally hosted **MongoDB** database (via **Mongoose**). The API performs full CRUD (Create, Read, Update, Delete) operations on student records and is tested using Postman.

---

## Technologies Used
- **Node.js**: Server-side JavaScript runtime environment.
- **Express.js**: Lightweight and fast web framework for building REST APIs.
- **MongoDB Community Server**: NoSQL database running locally on port `27017`.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.
- **dotenv**: Module to load environment variables from `.env` into `process.env`.
- **Postman**: API testing and collection runner.
- **nodemon** *(dev dependency)*: Auto-restarts the server during development when file changes occur.

---

## Project Structure
```text
Assignment-08/
├── models/
│   └── Student.js                         # Mongoose schema and model definition
├── routes/
│   └── studentRoutes.js                   # Express router handling CRUD endpoints
├── postman/
│   └── Assignment-08.postman_collection.json # Exported Postman test collection (Port 5001)
├── .env                                   # Local environment variables (Port 5001)
├── .env.example                           # Template for environment variables
├── .gitignore                             # Files and folders to ignore in Git
├── package.json                           # Project metadata, scripts, and dependencies
├── server.js                              # Main server entry point
└── README.md                              # Project documentation and guide
```

---

## Prerequisites
Before running this project, ensure you have the following installed on your machine:
1. **Node.js** (v18 or higher recommended) and **npm**:
   ```bash
   node -v
   npm -v
   ```
2. **MongoDB Community Server** installed and running locally:
   - For macOS with Homebrew:
     ```bash
     brew --version
     ```
3. **Postman**: Download and install Postman from [https://www.postman.com/downloads/](https://www.postman.com/downloads/).

---

## Port Configuration Note (Port 5001)
> [!NOTE]
> On macOS (Monterey, Ventura, Sonoma, Sequoia), **Apple's AirTunes / AirPlay Receiver** service occupies port 5000 by default and returns `403 Forbidden` (`Server: AirTunes/...`).
> To completely avoid this conflict, this API runs on **port 5001**.

---

## Installation Instructions

1. Open your terminal and navigate to the project directory:
   ```bash
   cd Assignment-08
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

---

## How to Start Local MongoDB

This project uses a **local MongoDB instance** (`mongodb://127.0.0.1:27017/studentDB`) and **does not require MongoDB Atlas or cloud credentials**.

### On macOS:
- Run MongoDB as a background service:
  ```bash
  brew services start mongodb-community@7.0
  ```
  *(or replace `@7.0` with your installed version)*

- Alternatively, run MongoDB directly in a separate terminal:
  ```bash
  mongod --config /opt/homebrew/etc/mongod.conf
  ```

---

## Environment Configuration (`.env`)

A `.env` file is located in the root directory. Its contents are:
```env
PORT=5001
MONGO_URI=mongodb://127.0.0.1:27017/studentDB
```

*(A template is also available in `.env.example`).*

---

## How to Start the Node.js Server

You can run the server in either development or production mode:

1. **Development Start (with Nodemon auto-reload):**
   ```bash
   npm run dev
   ```

2. **Standard Start:**
   ```bash
   npm start
   ```

### Expected Terminal Output:
```text
Connected to MongoDB successfully at: mongodb://127.0.0.1:27017/studentDB
Server is running on port 5001 -> http://localhost:5001
```

---

## Quick Terminal Testing with curl

Once the server is running, open a new terminal window to test:

1. **Health Check (Root Route):**
   ```bash
   curl -i http://127.0.0.1:5001/
   ```
   **Expected Response (`200 OK`):**
   ```json
   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   {"message":"Student Management REST API is running successfully!"}
   ```

2. **Retrieve All Students:**
   ```bash
   curl -i http://127.0.0.1:5001/api/students
   ```
   **Expected Response (`200 OK`):**
   ```json
   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   []
   ```
   *(Returns `[]` if no students have been added yet, or an array of student objects if records exist).*

---

## How to Import and Test the Postman Collection

1. Open **Postman**.
2. Click the **Import** button in the top-left corner.
3. Select and import:
   `Assignment-08/postman/Assignment-08.postman_collection.json`
4. The collection **"Assignment-08 Student Management REST API"** has `baseUrl` preconfigured to `http://localhost:5001`.
5. No authentication is required for any request.

### Step-by-Step Testing of CRUD Operations

Execute requests in the following sequence:

#### 1. CREATE Student (`POST /api/students`)
- **Method:** `POST`
- **URL:** `http://localhost:5001/api/students`
- **Headers:** `Content-Type: application/json`
- **Request Body (JSON):**
  ```json
  {
    "name": "Pranav Kedar",
    "email": "pranav@example.com",
    "age": 20,
    "course": "IT"
  }
  ```
- **Expected Status:** `201 Created`
- **Expected Response:**
  ```json
  {
    "_id": "670c5e317...",
    "name": "Pranav Kedar",
    "email": "pranav@example.com",
    "age": 20,
    "course": "IT",
    "createdAt": "2026-10-14T...",
    "updatedAt": "2026-10-14T..."
  }
  ```
- *Note: The Postman test script automatically stores the returned `_id` into the collection variable `studentId`.*

---

#### 2. READ All Students (`GET /api/students`)
- **Method:** `GET`
- **URL:** `http://localhost:5001/api/students`
- **Expected Status:** `200 OK`
- **Expected Response:** JSON array containing student documents.

---

#### 3. READ One Student (`GET /api/students/:id`)
- **Method:** `GET`
- **URL:** `http://localhost:5001/api/students/{{studentId}}`
- **Expected Status:** `200 OK`
- **Expected Response:** The specific student object matching the ID.
- **Error Statuses:** `400 Bad Request` for invalid MongoDB ID, `404 Not Found` if student doesn't exist.

---

#### 4. UPDATE Student (`PUT /api/students/:id`)
- **Method:** `PUT`
- **URL:** `http://localhost:5001/api/students/{{studentId}}`
- **Headers:** `Content-Type: application/json`
- **Request Body (JSON):**
  ```json
  {
    "name": "Pranav Kedar",
    "email": "pranav.updated@example.com",
    "age": 21,
    "course": "Computer Science"
  }
  ```
- **Expected Status:** `200 OK`
- **Expected Response:** Updated student object with the new age and course.

---

#### 5. DELETE Student (`DELETE /api/students/:id`)
- **Method:** `DELETE`
- **URL:** `http://localhost:5001/api/students/{{studentId}}`
- **Expected Status:** `200 OK`
- **Expected Response:**
  ```json
  {
    "message": "Student deleted successfully"
  }
  ```

---

## Verifying in MongoDB Shell (`mongosh`)

You can inspect the saved records in your local MongoDB at any time:
```bash
mongosh
use studentDB
db.students.find().pretty()
```

---

## Common Troubleshooting Steps

| Issue | Cause | Solution |
| :--- | :--- | :--- |
| `MongoDB connection error: connect ECONNREFUSED 127.0.0.1:27017` | Local MongoDB is not running. | Run `brew services start mongodb-community@7.0` in terminal. |
| `403 Forbidden` (`Server: AirTunes/...`) | Requests sent to port 5000 instead of 5001. | Ensure you are calling port `5001` (`http://localhost:5001`). Port 5000 is used by macOS AirPlay. |
| `Invalid student ID` (`400 Bad Request`) | The ID parameter in URL is not a 24-char hex ObjectId. | Run `CREATE Student` first so `{{studentId}}` is populated in Postman. |
| Validation error (`400 Bad Request`) | Missing required fields or negative age. | Ensure `name`, `email`, `age` (positive number), and `course` are provided. |
