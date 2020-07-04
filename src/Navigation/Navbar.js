import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="navbar-link">
            React Task Manager
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
