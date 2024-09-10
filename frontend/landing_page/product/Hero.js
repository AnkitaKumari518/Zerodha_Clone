import React from "react";

function Hero() {
  return (
    <div className="container  border-bottom mb-5">
      <div className="text-center mt-5 p-3">
        <h1 style={{fontSize: "3.5rem", lineHeight: "1.25", color: "#424242"}}>Technology</h1>
        <h3 className="text-muted mt-3 fs-3">Sleek, modern, and intuitive trading platforms</h3>
        <p className="mt-3 mb-5 fs-4">
          Check out our
          <a href="#" style={{ textDecoration: "none" }}>
            investment offerings →
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
