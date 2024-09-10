App.js

import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Apps = () => {
  return (
    <div>
      <form>
        <TextField
          style={{ width: "80%" }}
          fullWidth
          label="Search for apps"
          id="fullWidth"
        />
        <Button style={{ marginLeft: "20px" }} variant="contained" size="large">
          Search
        </Button>
      </form>
    </div>
  );
};

export default Apps;

