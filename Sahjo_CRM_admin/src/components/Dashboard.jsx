import React from "react";

const Dashboard = () => {
  return (
    <main className="col-md ms-sm-auto px-md-0 py-0">
      <h1 className="h2 mb-4">Dashboard</h1>

      {/* Stats Cards */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body d-flex align-items-center">
              <div className="me-3 text-primary">
                <i className="bi bi-box-seam card-icon"></i>
              </div>
              <div>
                <h6 className="card-title mb-1">Active Shipments</h6>
                <h4 className="fw-bold">128</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body d-flex align-items-center">
              <div className="me-3 text-success">
                <i className="bi bi-currency-dollar card-icon"></i>
              </div>
              <div>
                <h6 className="card-title mb-1">Revenue (Month)</h6>
                <h4 className="fw-bold">$23,400</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body d-flex align-items-center">
              <div className="me-3 text-warning">
                <i className="bi bi-truck-front card-icon"></i>
              </div>
              <div>
                <h6 className="card-title mb-1">Fleet Available</h6>
                <h4 className="fw-bold">16 Trucks</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body d-flex align-items-center">
              <div className="me-3 text-danger">
                <i className="bi bi-receipt card-icon"></i>
              </div>
              <div>
                <h6 className="card-title mb-1">Pending Invoices</h6>
                <h4 className="fw-bold">12</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="card shadow-sm">
        <div className="card-header bg-white fw-bold">Recent Orders</div>
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
                    <span className="badge bg-warning text-dark">Pending Pickup</span>
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
    </main>
  );
};

export default Dashboard;
