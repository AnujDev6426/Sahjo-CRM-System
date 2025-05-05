import React from "react";

const Topbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-black shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center fw-bold" href="#">
          <img
            src="/assets/logo.png"
            alt="Company Logo"
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
          />
                  <span style={{color:'aliceblue'}}>SAHJO FREIGHT CARRIER</span>
        </a>

        <div className="d-flex align-items-center">
                  <span className="me-3 fw-semibold" style={{ color: 'aliceblue' }}>Admin</span>
          <img
            style={{ width: "30px" }}
            src="/assets/admin.jpg"
            alt="User Avatar"
            className="rounded-circle"
          />
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
