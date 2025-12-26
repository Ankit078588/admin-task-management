# Project Setup
1. Clone the repository

2. Create .env file in root directory and add below variables
PORT=
JWT_SECRET=
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=

3. Install dependencies
npm i

4. Start the server
npm run dev
Server will run at:  http://localhost:3000






# 1. Signup Endpoint
- POST  http://localhost:3000/api/auth/signup
{
    "name": "kid5",
    "email": "kid5@gmail.com",
    "password": "1234567",
    "role": "manager",
    "gender": "male"
}

o/p :
{
    "message": "Signup successful.",
    "user": {
        "id": 6,
        "name": "kid5",
        "email": "kid5@gmail.com",
        "password": "$2b$10$lWrNz5Z4euBuKLqz2wulwu1MMjrk90.XYIVP7Hbk8sfkKR5fo3Q3e",
        "gender": "male",
        "role": "manager"
    }
}



# 2. Login Endpoint
- POST http://localhost:3000/api/auth/login
{
    "email": "kid4@gmail.com",
    "password": "1234567"
}

o/p :
{
    "message": "Login successful.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJraWQ0QGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc2NjcwODgxMSwiZXhwIjoxNzY2Nzk1MjExfQ.yGXSxhrVCTtKZ16JxhDXOQE9Hh2ijfp098mLdlqs3Zo"
}




# 3. Create Task Endpoint
- NOTE: Include this while hitting API
  Authorization: Bearer <JWT_TOKEN>

- POST http://localhost:3000/api/tasks
{
  "task_name": "Frontend Dashboard",
  "task_description": "Create admin dashboard UI",
  "task_type": ["a-task", "c-task"],
  "start_date": "2025-01-10",
  "end_date": "2025-01-20"
}

o/p :
{
    "message": "Task created successfully",
    "data": {
        "id": 1,
        "task_name": "Frontend Dashboard",
        "task_description": "Create admin dashboard UI",
        "task_type": [
            "a-task",
            "c-task"
        ],
        "start_date": "2025-01-10",
        "end_date": "2025-01-20",
        "created_by": 5,
        "updatedAt": "2025-12-26T00:27:01.130Z",
        "createdAt": "2025-12-26T00:27:01.130Z"
    }
}



# 4. Get All Tasks (super-admin / admin / manager / user)
- GET http://localhost:3000/api/tasks

o/p :
{
  "message": "Tasks fetched successfully",
  "count": 2,
  "data": [
    {
      "id": 2,
      "task_name": "Backend APIs",
      "task_description": "Create task APIs",
      "task_type": ["b-task"],
      "start_date": "2025-01-05",
      "end_date": "2025-01-15",
      "created_by": 2,
      "createdAt": "2025-01-02T09:10:00.000Z",
      "updatedAt": "2025-01-02T09:10:00.000Z"
    }
  ]
}
