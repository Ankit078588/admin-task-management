# Admin Task Management System

## Project Setup

### 1. Clone the repository
```bash
git clone <repository-url>
cd admin-task-management
```

### 2. Create `.env` file in root directory
```env
PORT=
JWT_SECRET=
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
```

### 3. Install dependencies
```bash
npm i
```

### 4. Start the server
```bash
npm run dev
```

### 5. Server URL
```text
http://localhost:3000
```

---

## 1. Signup Endpoint

### Endpoint
```http
POST /api/auth/signup
```

### Request Body
```json
{
  "name": "kid5",
  "email": "kid5@gmail.com",
  "password": "1234567",
  "role": "manager",
  "gender": "male"
}
```

### Response
```json
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
```

---

## 2. Login Endpoint

### Endpoint
```http
POST /api/auth/login
```

### Request Body
```json
{
  "email": "kid4@gmail.com",
  "password": "1234567"
}
```

### Response
```json
{
  "message": "Login successful.",
  "token": "JWT_TOKEN"
}
```

---

## 3. Create Task Endpoint

### Headers
```http
Authorization: Bearer <JWT_TOKEN>
```

### Endpoint
```http
POST /api/tasks
```

### Request Body
```json
{
  "task_name": "Frontend Dashboard",
  "task_description": "Create admin dashboard UI",
  "task_type": ["a-task", "c-task"],
  "start_date": "2025-01-10",
  "end_date": "2025-01-20"
}
```

### Response
```json
{
  "message": "Task created successfully",
  "data": {
    "id": 1,
    "task_name": "Frontend Dashboard",
    "task_description": "Create admin dashboard UI",
    "task_type": ["a-task", "c-task"],
    "start_date": "2025-01-10",
    "end_date": "2025-01-20",
    "created_by": 5,
    "updatedAt": "2025-12-26T00:27:01.130Z",
    "createdAt": "2025-12-26T00:27:01.130Z"
  }
}
```

---

## 4. Get All Tasks

### Roles Allowed
```text
super-admin, admin, manager, user
```

### Endpoint
```http
GET /api/tasks
```

### Response
```json
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
```
