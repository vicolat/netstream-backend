<img width="1898" height="964" alt="Screenshot 2026-04-23 061717" src="https://github.com/user-attachments/assets/c7957ada-358a-4ea9-b041-18767ba9b7ed" />


# 🎬 NetStream – Full Stack Movie Streaming App

A simple movie streaming web application built as part of my **DevOps learning journey**, focused on understanding how full-stack systems are integrated and deployed in real environments.

---

## 🚀 Live Demo

👉 http://54.225.21.63/

---


## 🛠 Tech Stack

**Frontend**
- React.js  

**Backend**
- Spring Boot (Java)  

**Database**
- MongoDB  

**Deployment**
- AWS EC2  
- Nginx  
- Git  

---

## 🧱 System Architecture

This project follows a simple 3-tier web application architecture commonly used in real-world deployments.

It is divided into:

- Presentation Layer (Frontend)
- Application Layer (Backend API)
- Data Layer (Database)

---

### 🏗️ Architecture Design

```
                ┌──────────────────────────┐
                │      User Browser        │
                └──────────┬───────────────┘
                           │
                           ▼
                ┌──────────────────────────┐
                │   React Frontend UI     │
                │ (Hosted via Nginx on EC2)│
                └──────────┬───────────────┘
                           │  HTTP/REST API Calls
                           ▼
                ┌──────────────────────────┐
                │ Spring Boot Backend API  │
                │   (Business Logic)       │
                └──────────┬───────────────┘
                           │
                           ▼
                ┌──────────────────────────┐
                │     MongoDB Database     │
                │   (Data Storage Layer)   │
                └──────────────────────────┘
```

---

### ⚙️ Explanation of Flow

- The user interacts with the React frontend in the browser  
- The frontend is served through Nginx on AWS EC2  
- API requests are sent from frontend to backend  
- Spring Boot processes requests and handles business logic  
- MongoDB stores and returns data  
- Backend sends response back to frontend  
- UI updates dynamically with fetched data  

---

### 💡 Why This Architecture Matters

This structure helped me understand:

- How frontend and backend communicate in real systems  
- Why APIs are the bridge in full-stack applications  
- How deployment changes application behavior  
- How cloud hosting simulates real production environments  

---

## ⚙️ How It Works

1. User opens the application in the browser  
2. Nginx serves the React frontend  
3. Frontend sends requests to the Spring Boot backend  
4. Backend processes requests and fetches data from MongoDB  
5. Data is returned and displayed in the UI  

---

## 🚀 Deployment Flow

1. Frontend is built using React  
2. Backend is built using Spring Boot  
3. Application is deployed on AWS EC2  
4. Nginx serves the frontend  
5. API connects frontend and backend  

---

## 🖥️ How to Run Locally

### Backend (Spring Boot)

```bash
cd backend
```

```bash
./mvnw spring-boot:run
```

OR

```bash
mvn spring-boot:run
```

Backend runs on:
```
http://localhost:8080
```

---

### Frontend (React)

```bash
cd frontend
npm install
npm start
```

Frontend runs on:
```
http://localhost:3000
```

---

## 🧪 Backend Testing

Before deployment, I tested the backend locally using:

- Browser (for simple GET requests)  
- Postman (for full API testing)  

Example endpoints:

```
GET http://localhost:8080/api/movies
GET http://localhost:8080/api/movies/{id}
```

Also verified:
- MongoDB connection  
- Data retrieval from API responses  

---

##  Major Challenges I Faced

- Frontend not displaying movies due to API issues  
- Backend and frontend integration problems  
- “Failed to fetch” errors  
- MongoDB authentication issues  
- UI not updating with backend data  
- Deployment issues on AWS EC2  

---

##  What I Learned

- How APIs connect frontend and backend  
- How backend testing improves reliability  
- How deployment exposes hidden issues  
- How debugging is essential in real systems  
- How cloud deployment works in practice  

---

## 📂 Project Structure

```
netstream/
├── frontend/
├── backend/

```

---

## 👨‍💻 Author

Victor Olatunji
