import React from "react";
import './logo.css'

function Universe() {
  return (
    <div className="container mb-5 mt-5">
      <div className="row text-center">

        <div className="col-md-4 mt-5 p-3">
          <div className="logo-box">
            <img src="media/images/zerodhaFundhouse.png" alt="logo" />
          </div>
          <p className="text-muted small">
            Our asset management venture
            that is creating simple and transparent index
            funds to help you save for your goals.
          </p>
        </div>

        <div className="col-md-4 mt-5 p-3">
          <div className="logo-box">
            <img src="media/images/dittoLogo.png" alt="logo" />
          </div>
          <p className="text-muted small">
            Personalized advice on life
            and health insurance. No spam
            and no mis-selling.
          </p>
        </div>

        <div className="col-md-4 mt-5 p-3">
          <div className="logo-box">
            <img src="media/images/goldenpiLogo.png" alt="logo" />
          </div>
          <p className="text-muted small">
            Bond investment platform
            that allows you to invest in curated
            fixed-income securities for stable returns.
          </p>
        </div>

        <div className="col-md-4 mt-5 p-3">
          <div className="logo-box">
            <img src="media/images/sensibullLogo.svg" alt="logo" />
          </div>
          <p className="text-muted small">
            Options trading platform that lets you
            create strategies, analyze positions, and examine
            data points like open interest, FII/DII, and more.
          </p>
        </div>

        <div className="col-md-4 mt-5 p-3">
          <div className="logo-box">
            <img src="media/images/smallcaseLogo.png" alt="logo" />
          </div>
          <p className="text-muted small">
            Thematic investing platform
            that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-md-4 mt-5 p-3">
          <div className="logo-box">
            <img src="media/images/streakLogo.png" alt="logo" />
          </div>
          <p className="text-muted small">
            Systematic trading platform
            that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <button style={{"width":"20%" ,"margin":"0 auto"}} className='btn btn-primary p-3 mt-5'>Signup for free</button>
      </div>
    </div>
  );
}

export default Universe;