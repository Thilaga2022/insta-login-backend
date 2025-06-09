# Instagram Login Clone 🔐

A responsive **Instagram login page clone** built with **React** (frontend) and a simple **Node.js + Express** backend for login verification. This clone supports login using **username, mobile number, or email address**.

---

## 🚀 Features

- Clean Instagram-style UI
- Responsive layout
- Login using:
  - Username (e.g. `thilaga123`)
  - Email (e.g. `user@example.com`)
  - Mobile number (e.g. `9876543210`)
  - pw : 1234
- Axios-based request to backend
- Navigation on login success/failure
- Stores logged-in username in `localStorage`
- Facebook login link & "Forgot password?" feature
- Footer and asset styling

---

**Backend**
- Node.js
- Express.js
- CORS

---

## 📁 Folder Structure
insta-login-clone/
├── backend/ # Express backend
│ └── index.js
  └── package.json

## Setup and Run the Backend
bash
Copy
Edit
cd backend
npm init -y
npm install express cors

## Run the backend server:

Copy
Edit
node index.js

## 🧠 Logic Flow
User enters username and password

React calls http://localhost:3000/login?username=xxx&password=yyy via Axios

Backend checks against a hardcoded array of users

If valid, frontend redirects to /success; else, to /fail

Username is stored in localStorage

## 📄 License
This project is licensed under the MIT License.

## 🙋‍♀️ Author
Made with ❤️ by Thilaga
Inspired by Instagram. For educational and practice purposes only.
