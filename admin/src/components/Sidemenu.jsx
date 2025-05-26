import React from "react";

const Sidebar = (user) => {
  return (
    <div className="d-flex flex-column vh-100 p-3 bg-dark shadow-sm border-end text-white">
      {/* Profile Section */}
      <div className="d-flex align-items-center mb-4 px-3">
        <img
          src="/assets/admin.jpg"
          alt="Profile"
          className="rounded-circle me-2"
          width="40"
          height="40"
        />
     
          <div className="fw-bold">{user.name}</div>
          
      </div>

      {/* Navigation */}
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <i className="bi bi-people me-2"></i> Customers
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <i className="bi bi-person-plus me-2"></i> Leads
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <i className="bi bi-box-seam me-2"></i> Orders
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <i className="bi bi-truck me-2"></i> Shipments
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <i className="bi bi-truck-front me-2"></i> Fleet
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <i className="bi bi-credit-card me-2"></i> Billing
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <i className="bi bi-graph-up-arrow me-2"></i> Reports
          </a>
        </li>
        <li className="nav-item mt-auto">
          <a href="#" className="nav-link text-white">
            <i className="bi bi-gear me-2"></i> Settings
          </a>
        </li>
        <li className="nav-item mt-3">
          <a href="#" className="nav-link text-danger fw-bold">
            <i className="bi bi-box-arrow-right me-2"></i> Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
