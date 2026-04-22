# 🎬 NetStream – Full Stack Movie Streaming Platform

A full-stack movie streaming web application built with:

- React (Frontend)
- Spring Boot (Backend)
- AWS EC2 Deployment
- Nginx Web Server

---

## 🚀 Live Demo

👉 http://54.225.21.63/

---

## 🏃‍♂️ How to Run Locally

### Frontend (React)

```bash
cd frontend
npm install
npm start

frontend runs on:
http://localhost:3000

---

md id="runbackend"
### Backend (Spring Boot)

bash
cd backend
./mvnw spring-boot:run

Backend runs on:
http:localhost:8080

---

```md id="deployflow"
## 🚀 Deployment Flow

Frontend (React)  
→ Built into static files  
→ Served via Nginx on AWS EC2  

Backend (Spring Boot)  
→ Runs on EC2 server (port 8080)  
→ Exposes REST API endpoints  

---

## 🚀 Deployment Flow

GitHub → AWS EC2 → Nginx (Frontend) → Spring Boot (Backend API)

---

## 🔗 Request Flow

User Browser  
→ React Frontend (Nginx)  
→ Spring Boot Backend API  
→ Response returned to UI

---

## 📸 Preview

<img src="./screenshots/home.png" width="700"/>

---

## 🛠 Tech Stack

Frontend:
- React.js

Backend:
- Java (Spring Boot)

Deployment:
- AWS EC2
- Nginx

---

## ⚙️ Features

- Movie listing from backend API
- Search functionality
- Hero slider with dynamic content
- Trailer integration
- Responsive UI

---

## 🧱 Architecture

Frontend (React)
→ Backend API (Spring Boot)
→ AWS EC2 (Nginx)

---

## 📂 Project Structure

netstream/
├── frontend/
├── backend/
├── screenshots/


---

## 🧠 Challenges Faced

- API connection issues ("Failed to fetch")
- AWS EC2 deployment setup
- Nginx configuration for frontend hosting
- GitHub repository cleanup
- Handling backend/frontend integration

---

## 🔥 Future Improvements

- CI/CD pipeline (GitHub Actions)
- Docker containerization
- Domain name + HTTPS setup
- Monitoring & logging system

---

## 📌 Note

This project demonstrates real-world full-stack deployment using cloud infrastructure and API integration.

---

## 👨‍💻 Author

Built by **Victor Olatunji