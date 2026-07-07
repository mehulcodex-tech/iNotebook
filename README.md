# 📒 iNotebook

A secure and responsive **full-stack notes application** that allows users to create, edit, delete, and manage their personal notes from anywhere. The application uses **JWT authentication** to ensure that every user's notes remain private.

---

## 🚀 Features

* 🔐 User Authentication (Sign Up & Login)
* 🔑 JWT-based Secure Authorization
* 📝 Create, Edit and Delete Notes
* 👤 User-specific Notes Management
* ⚡ RESTful API Integration
* 📱 Responsive User Interface
* 💾 MongoDB Database Storage

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Bootstrap
* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JSON Web Token (JWT)
* bcrypt.js

---

## 📂 Project Structure

```text
iNotebook/
│
├── client/              # React Frontend
│   ├── public/
│   ├── src/
│   └── package.json
│
├── backend/             # Express Backend
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── db.js
│   └── index.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/mehulcodex-tech/iNotebook.git
```

Move into the project directory:

```bash
cd iNotebook
```

---

## Install Dependencies

### Frontend

```bash
cd client
npm install
```

### Backend

```bash
cd ../backend
npm install
```

---

## Environment Variables

Create a `.env` file inside the backend folder and add:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## ▶️ Run the Application

### Start Backend

```bash
cd backend
npm start
```

### Start Frontend

```bash
cd client
npm start
```

The frontend will run on:

```
http://localhost:3000
```

The backend will run on:

```
http://localhost:5000
```

---

## 📸 Screenshots

You can add screenshots of:

* Login Page
* Signup Page
* Home Dashboard
* Notes Section
* Add Note Modal

---

## 📌 API Endpoints

### Authentication

* `POST /api/auth/createuser`
* `POST /api/auth/login`
* `POST /api/auth/getuser`

### Notes

* `GET /api/notes/fetchallnotes`
* `POST /api/notes/addnote`
* `PUT /api/notes/updatenote/:id`
* `DELETE /api/notes/deletenote/:id`

---

## 🔒 Security

* Passwords are hashed using **bcrypt.js**
* JWT-based authentication
* Protected API routes
* User-specific note access

---

## 📈 Future Enhancements

* Dark Mode
* Rich Text Editor
* Image Attachments
* Note Categories
* Search & Filter
* Tags Support
* Archive & Restore Notes
* Cloud Deployment

---

## 👨‍💻 Author

**Mehul Gupta**

* GitHub: https://github.com/mehulcodex-tech

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!
