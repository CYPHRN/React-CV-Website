import React from "react";

function FPDescription() {
  return (
    <div className="text-white text-xs md:text-sm">
      <h4 className="mb-4 text-base md:text-lg lg:text-xl">
        User Authentication & Management System
      </h4>
      <p className="mb-4">
        A secure full-stack web application implementing industry-standard
        authentication practices with modern web technologies.
      </p>
      <ul className="text-md mt-6 mb-4">
        <p className="mb-1">Key Features</p>
        <li>• REST API Development</li>
        <li>
          • Node.js/Express backend with secure user registration and login
          endpoints
        </li>

        <li>
          • MongoDB with Mongoose ODM for user data persistence and session
          management{" "}
        </li>
        <li>
          • Bcrypt password hashing, session-based authentication, and protected
          route middleware{" "}
        </li>
        <li>
          • Bootstrap 5 interface with dynamic content rendering and user
          dashboard
        </li>
      </ul>
      <ul>
        <p className="mb-1 mt-6">Technical Highlights</p>
        <li>• RESTful architecture</li>
        <li>• Secure password storage</li>
        <li>• Authentication middleware</li>
        <li>• Modular code structure</li>
      </ul>
    </div>
  );
}

export default FPDescription;
