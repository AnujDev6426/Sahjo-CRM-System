import React from "react";
import Sidebar from "./Sidemenu";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 bg-light min-vh-100 p-0">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-md-10 p-4">
          <h2 className="mb-4">Dashboard</h2>

          {/* Stat Cards */}
          <div className="row g-4 mb-4">
            <div className="col-sm-6 col-md-3">
              <div className="card shadow-sm">
                <div className="card-body d-flex align-items-center">
                  <div className="me-3 fs-3 text-primary">
                    <i className="bi bi-box-seam"></i>
                  </div>
                  <div>
                    <div className="text-muted small">Active Shipments</div>
                    <div className="fw-bold fs-5">128</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3">
              <div className="card shadow-sm">
                <div className="card-body d-flex align-items-center">
                  <div className="me-3 fs-3 text-success">
                    <i className="bi bi-currency-dollar"></i>
                  </div>
                  <div>
                    <div className="text-muted small">Revenue (Month)</div>
                    <div className="fw-bold fs-5">$23,400</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3">
              <div className="card shadow-sm">
                <div className="card-body d-flex align-items-center">
                  <div className="me-3 fs-3 text-warning">
                    <i className="bi bi-truck-front"></i>
                  </div>
                  <div>
                    <div className="text-muted small">Fleet Available</div>
                    <div className="fw-bold fs-5">16 Trucks</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3">
              <div className="card shadow-sm">
                <div className="card-body d-flex align-items-center">
                  <div className="me-3 fs-3 text-danger">
                    <i className="bi bi-receipt"></i>
                  </div>
                  <div>
                    <div className="text-muted small">Pending Invoices</div>
                    <div className="fw-bold fs-5">12</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Orders Table */}
          <div className="card shadow-sm">
            <div className="card-header bg-white fw-bold">
              Recent Orders
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Pickup</th>
                      <th>Delivery</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#ORD00123</td>
                      <td>ACME Corp</td>
                      <td>New York, NY</td>
                      <td>Los Angeles, CA</td>
                      <td>
                        <span className="badge bg-success">In Transit</span>
                      </td>
                    </tr>
                    <tr>
                      <td>#ORD00124</td>
                      <td>Globex Inc.</td>
                      <td>Miami, FL</td>
                      <td>Houston, TX</td>
                      <td>
                        <span className="badge bg-warning text-dark">
                          Pending Pickup
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>#ORD00125</td>
                      <td>Stark Industries</td>
                      <td>Chicago, IL</td>
                      <td>Denver, CO</td>
                      <td>
                        <span className="badge bg-danger">Delayed</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Dashboard;
