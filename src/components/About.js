import React from "react";

const About = () => {
  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center">About iNotebook</h2>

      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title">📖 Welcome to iNotebook</h4>
          <p className="card-text">
            iNotebook is a secure cloud-based note-taking application that
            allows users to create, edit, delete, and organize their personal
            notes anytime and anywhere.
          </p>

          <hr />

          <h5>✨ Features</h5>
          <ul>
            <li>🔐 Secure User Authentication using JWT</li>
            <li>📝 Create, Edit and Delete Notes</li>
            <li>🏷️ Add Tags to Organize Notes</li>
            <li>☁️ Store Notes Securely in MongoDB</li>
            <li>⚡ Fast and Responsive User Interface</li>
            <li>📱 Mobile Friendly Design</li>
          </ul>

          <hr />

          <h5>🛠️ Technologies Used</h5>

          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>React.js</li>
                <li>Bootstrap 5</li>
                <li>React Router</li>
              </ul>
            </div>

            <div className="col-md-6">
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>JWT Authentication</li>
              </ul>
            </div>
          </div>

          <hr />

          <h5>🎯 Purpose</h5>

          <p>
            The goal of iNotebook is to provide a simple, secure, and efficient
            platform for managing personal notes. Whether you're a student,
            developer, or professional, iNotebook helps you keep your ideas
            organized in one place.
          </p>

          <hr />

          <h5>🚀 Future Improvements</h5>

          <ul>
            <li>🌙 Dark Mode</li>
            <li>📌 Pin Important Notes</li>
            <li>🔍 Advanced Search</li>
            <li>📂 Categories & Folders</li>
            <li>📤 Export Notes (PDF)</li>
            <li>🤝 Share Notes with Others</li>
          </ul>

          <div className="text-center mt-4">
            <p className="text-muted">
              Made with ❤️ using the MERN Stack
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;