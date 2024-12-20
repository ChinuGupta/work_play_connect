import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfileSection = () => {
  return (
    <div className="card shadow-sm" style={{ width: "18rem", margin: "60px" }}>
      {/* Cover Photo */}
      <div
        className="bg-primary"
        style={{
          height: "90px",
          background: "linear-gradient(45deg, #0073b1, #00a0dc)",
        }}
      ></div>

      {/* Profile Picture */}
      <div
        className="text-center position-relative"
        style={{ marginTop: "30px" }}
      >
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          className="rounded-circle border border-white"
          style={{
            position: "absolute",
            top: "-67px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#fff",
            padding: "5px",
          }}
        />
      </div>

      {/* Profile Details */}
      <div className="card-body text-center mt-4">
        <h6 className="card-title">Chinu Gupta</h6>
        <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>
          Student at Poornima College of Engineering <br />
          Full Stack Web Developer
        </p>
        <p className="text-muted mb-2" style={{ fontSize: "0.85rem" }}>
          Jaipur, Rajasthan
        </p>
        <a href="/" className="btn btn-primary btn-sm w-100">
          View Profile
        </a>
      </div>

      {/* Profile Stats */}
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          Profile viewers <span className="fw-bold">7</span>
        </li>
      </ul>

      {/* Premium Section */}
      <div className="card-body">
        <p className="text-muted mb-2" style={{ fontSize: "0.85rem" }}>
          Get 4x more profile views with Premium
        </p>
        <a href="/" className="btn btn-outline-primary btn-sm w-100">
          Try for ₹0
        </a>
      </div>
    </div>
  );
};

export default ProfileSection;
