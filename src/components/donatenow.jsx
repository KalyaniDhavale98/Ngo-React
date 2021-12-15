import React, { Component } from "react";
import pic1 from "../images/donationfeed.jpg";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import MenuIcon from "@mui/icons-material/Menu";

class DonateNow extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Button color="inherit">
                  Register
                  <HowToRegIcon />
                </Button>
                <Button color="inherit">
                  Login <LoginIcon />
                </Button>
                <Button color="inherit">
                  LogOut
                  <LogoutIcon />
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
        </div>
        <div>
          <img src={pic1} class="rounded w-90" height="500" alt="..." />
        </div>
      </div>
    );
  }
}

export default DonateNow;
