import React, { Component } from "react";
import "./Header.scss";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { ButtonBlue } from "../Globals";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import MenuDrawer from "./MenuDrawer";

export default class PageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _menuDrawer: React.createRef(),
    };
  }
  async componentDidMount() {}
  menuClick = () => {
    this.state._menuDrawer.current.openDrawerMethod();
  };
  openSignup = () => {
    window.location.href = `/Signup`;
  };
  openHome = () => {
    window.location.href = `/`;
  };

  render() {
    return (
      <>
        <div className="Header">
          <div className="menu-icon">
            <IconButton onClick={this.menuClick}>
              <MenuIcon fontSize="large" />
            </IconButton>
          </div>
          <MenuDrawer ref={this.state._menuDrawer} />
          <img
            className="logo"
            src="assets/images/fb.png"
            alt="Logo"
            onClick={this.openHome}
          />

          <div className="menu">
            <div className="menu-text">Why Us</div>
            <div className="menu-text">About Us</div>
            <div className="menu-text blue">Log In</div>
            <div className="menu-text">
              <ButtonBlue
                variant="contained"
                color="secondary"
                onClick={this.openSignup}
              >
                Sign Up
              </ButtonBlue>
            </div>
          </div>
        </div>
      </>
    );
  }
}
