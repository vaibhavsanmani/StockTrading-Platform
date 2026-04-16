import React from "react";

function CreateTicket() {
  return (
    <div
      style={{
        backgroundColor: "#f7f7f7",
        padding: "50px 0",
        minHeight: "100vh",
      }}
    >
      <div className="container mb-5">

        <div className="row">

          {/* Column 1 */}
          <div className="col-md-4 mb-4">
            <h5>
              <i className="fa fa-plus-circle me-2"></i>
              Account Opening
            </h5>

            <div className="mt-3 d-flex flex-column gap-2">
              <a href="#">Online Account Opening</a>
              <a href="#">Offline Account Opening</a>
              <a href="#">Company, Partnership and HUF Account Opening</a>
              <a href="#">NRI Account Opening</a>
              <a href="#">Charges at Zerodha</a>
              <a href="#">Zerodha IDFC FIRST Bank 3-in-1 Account</a>
              <a href="#">Getting Started</a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-md-4 mb-4">
            <h5>
              <i className="fa fa-user me-2"></i>
              Your Zerodha Account
            </h5>

            <div className="mt-3 d-flex flex-column gap-2">
              <a href="#">Login Credentials</a>
              <a href="#">Account Modification and Segment Addition</a>
              <a href="#">DP ID and bank details</a>
              <a href="#">Your Profile</a>
              <a href="#">Transfer and conversion of shares</a>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-md-4 mb-4">
            <h5>
              <i className="fa fa-bar-chart me-2"></i>
              Your Zerodha Account
            </h5>

            <div className="mt-3 d-flex flex-column gap-2">
              <a href="#">Margin/leverage, Product and Order types</a>
              <a href="#">Kite Web and Mobile</a>
              <a href="#">Trading FAQs</a>
              <a href="#">Corporate Actions</a>
              <a href="#">Sentinel</a>
              <a href="#">Kite API</a>
              <a href="#">Pi and other platforms</a>
              <a href="#">Stockreports+</a>
              <a href="#">GTT</a>
            </div>
          </div>

        </div>

        {/* Second Row */}
        <div className="row mt-5">

          <div className="col-md-4">
            <h5>
              <i className="fa fa-credit-card me-2"></i>
              Funds
            </h5>
            <div className="mt-3 d-flex flex-column gap-2">
              <a href="#">Adding Funds</a>
              <a href="#">Fund Withdrawal</a>
            </div>
          </div>

          <div className="col-md-4">
            <h5>
              <i className="fa fa-refresh me-2"></i>
              Console
            </h5>
            <div className="mt-3 d-flex flex-column gap-2">
              <a href="#">Reports</a>
              <a href="#">Ledger</a>
            </div>
          </div>

          <div className="col-md-4">
            <h5>
              <i className="fa fa-circle-o me-2"></i>
              Coin
            </h5>
            <div className="mt-3 d-flex flex-column gap-2">
              <a href="#">Understanding Mutual Funds</a>
              <a href="#">About Coin</a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default CreateTicket;