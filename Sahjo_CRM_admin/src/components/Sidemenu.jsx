import React from "react";

const Sidebar = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Section */}
        <nav className="col-md-2 d-none d-md-block sidebar bg-white shadow-sm">
          <div className="pt-4">
            <a href="#" className="d-block py-2 px-3 text-decoration-none text-dark fw-medium">
              <i className="bi bi-speedometer2 me-2"></i> Dashboard
            </a>
            <a href="#" className="d-block py-2 px-3 text-decoration-none text-dark fw-medium">
              <i className="bi bi-people me-2"></i> Customers
            </a>
            <a href="#" className="d-block py-2 px-3 text-decoration-none text-dark fw-medium">
              <i className="bi bi-person-plus me-2"></i> Leads
            </a>
            <a href="#" className="d-block py-2 px-3 text-decoration-none text-dark fw-medium">
              <i className="bi bi-box-seam me-2"></i> Orders
            </a>
            <a href="#" className="d-block py-2 px-3 text-decoration-none text-dark fw-medium">
              <i className="bi bi-truck me-2"></i> Shipments
            </a>
            <a href="#" className="d-block py-2 px-3 text-decoration-none text-dark fw-medium">
              <i className="bi bi-truck-front me-2"></i> Fleet
            </a>
            <a href="#" className="d-block py-2 px-3 text-decoration-none text-dark fw-medium">
              <i className="bi bi-credit-card me-2"></i> Billing
            </a>
            <a href="#" className="d-block py-2 px-3 text-decoration-none text-dark fw-medium">
              <i className="bi bi-graph-up-arrow me-2"></i> Reports
            </a>
            <a href="#" className="d-block py-2 px-3 text-decoration-none text-dark fw-medium">
              <i className="bi bi-gear me-2"></i> Settings
            </a>
            <a href="#" className="d-block py-2 px-3 text-decoration-none text-danger fw-medium mt-4">
              <i className="bi bi-box-arrow-right me-2"></i> Logout
            </a>
          </div>
        </nav>

        {/* Main Content Section */}
        <main className="col-md-10 ms-sm-auto px-md-4 py-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
