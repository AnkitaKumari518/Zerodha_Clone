import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <p className="mt-5 fs-3">
          Want to know more about our technology stack? Check out the{" "}
          <a href="#">Zerodha.tech</a> blog.
        </p>
        <h1
          className=""
          style={{ fontSize: "2.8rem", color: "#424242", marginTop: "12%" }}
        >
          The Zerodha Universe
        </h1>
        <p className="mt-5 fs-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <a href="#">
            <img
              src="media/images/zerodhaFundhouse.png"
              style={{ width: "65%" }}
            />
          </a>
          <p className="text-muted mt-5">
            our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <a href="#">
            <img src="media/images/sensibullLogo.svg" style={{ width: "65%" }} />
          </a>
          <p className="text-muted mt-5">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <a href="#">
            <img src="media/images/goldenpiLogo.png" style={{ width: "65%" }} />
          </a>
          <p className="text-muted mt-5">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <a href="#">
            <img src="media/images/streakLogo.png" style={{ width: "65%" }} />
          </a>
          <p className="text-muted mt-5">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <a href="#">
            <img
              src="media/images/smallcaseLogo.png"
              style={{ width: "65%" }}
            />
          </a>
          <p className="text-muted mt-5">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <a href="#">
            <img src="media/images/dittoLogo.png" style={{ width: "50%" }} />
          </a>
          <p className="text-muted mt-5">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button
          className="p-3 btn btn-primary fs-5 mt-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
