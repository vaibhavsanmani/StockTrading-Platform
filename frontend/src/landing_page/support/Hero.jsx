import React from "react";

function Hero() {
  return (
    <div
      style={{
        backgroundColor: "#387ed1",
        minHeight: "60vh",
        width: "100%",
        color: "white",
        padding: "50px 0",
      }}
    >
      <div className="container">
        
        {/* Top Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "30px",
          }}
        >
          <h5>Support Portal</h5>
          <a href="#" style={{ color: "white", textDecoration: "underline" }}>
            Track Tickets
          </a>
        </div>

        <div className="row align-items-center">
          
          {/* Left */}
          <div className="col-md-7">
            <h3 style={{ marginBottom: "20px" }}>
              Search for an answer or browse help topics <br />
              to create a ticket
            </h3>

            <input
              type="text"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected"
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "5px",
                border: "none",
                marginBottom: "15px",
              }}
            />

            <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
              <a href="#" style={{ color: "white" }}>Track account opening</a>
              <a href="#" style={{ color: "white" }}>Track segment activation</a>
              <a href="#" style={{ color: "white" }}>Intraday margins</a>
              <a href="#" style={{ color: "white" }}>Kite user manual</a>
            </div>
          </div>

          {/* Right */}
          <div className="col-md-5" style={{ marginTop: "20px" }}>
            <h5>Featured</h5>

            <ol style={{ marginTop: "15px" }}>
              <li>
                <a href="#" style={{ color: "white" }}>
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "white" }}>
                  Latest Intraday leverages - MIS & CO
                </a>
              </li>
            </ol>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;