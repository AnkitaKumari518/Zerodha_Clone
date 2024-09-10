import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Sighup() {

  return (
    <div className="container text-center">
      <img src="media/images/imageConsole.png" alt="consoleLogo" />
      <h3
        className="fs-4 mb-5"
        style={{ color: "#424242", lineHeight: "2.2rem", fontWeight: "400" }}
      >
        Login to Console
      </h3>

      <div style={{ backgroundColor: "#f8f9fa", boxShadow: "1px solid gray" }}>
        <img
          className="mt-3 mb-5"
          style={{ width: "60px" }}
          src="media/images/logo.png"
          alt="logo"
        />
        <br />
        <form>
          <TextField
            className="mb-4"
            id="outlined-basic"
            label="Phone or User ID"
            variant="outlined"
            style={{ width: "30%" }}
          />
          <br />
          <TextField
            className="mb-4"
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            style={{ width: "30%" }}
          />
          <br />
          <input className="mb-2" type="radio" /> Login to Kite Web also?
          <br />
          <p className="mb-4 text-muted" style={{ fontSize: "12px" }}>
            not recommended on shared or public system
          </p>
          <br />
          <Button
            style={{ backgroundColor: "#ef233c", width: "30%" }}
            variant="contained"
            size="large"
            disableElevation
          >
            Login
          </Button>
          <p style={{ fontSize: "12px" }}>
            <a href="#" style={{ textDecoration: "none", color: "gray" }}>
              Forgot User ID or Password?
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Sighup;
