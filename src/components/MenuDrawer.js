import React, { Component } from "react";
import "./MenuDrawer.scss";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { ButtonBlue } from "../Globals";

export default class MenuDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrawer: false,
    };
  }
  async componentDidMount() {}
  openDrawerMethod = () => {
    this.setState({ openDrawer: true });
  };
  closeDrawerMethod = () => {
    this.setState({ openDrawer: false });
  };
  list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={this.closeDrawerMethod}
      onKeyDown={this.closeDrawerMethod}
      className="MenuDrawer"
    >
      <List>
        <ListItem class="logo-container center">
          <IconButton onClick={this.menuClick} className="close-button">
            <CloseIcon fontSize="large" />
          </IconButton>
          <img className="logo" src="assets/images/fb.png" alt="" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemText primary="Why Us" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="About Us" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText className="login-text">Log In</ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>
            <ButtonBlue variant="contained" color="secondary" fullWidth>
              Sign Up
            </ButtonBlue>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );

  render() {
    return (
      <Drawer
        anchor={"left"}
        open={this.state.openDrawer}
        onClose={this.closeDrawerMethod}
      >
        {this.list()}
      </Drawer>
    );
  }
}
