import React, { Component } from "react";
import "./Footer.scss";

export default class PageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {}

  render() {
    return (
      <>
        <div className="Footer">
          <div className="top center">
            <div className="column">
              {/* <img className="logo" src="" /> */}
            </div>
            <div className="column">
              <div className="header-text">About</div>
              <div className="sub-text">Why Us</div>
              <div className="sub-text">About Us</div>
              <div className="sub-text">Contact Us</div>
            </div>
            <div className="column">
              <div className="header-text">Terms</div>
              <div className="sub-text">Terms & Conditions</div>
              <div className="sub-text">Privacy Policy</div>
            </div>
            <div className="column">
              <div className="header-text">Connect with Us</div>
              <div className="connect-icon">
                <img src="assets/images/fb.png" alt="" />
              </div>
              <div className="connect-icon">
                <img src="assets/images/instagram.png" alt="" />
              </div>
              <div className="connect-icon">
                <img src="assets/images/linkedin.png" alt="" />
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="copyright-text">© Daren 2022</div>
          </div>
        </div>
      </>
    );
  }
}
