/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// reactstrap components

import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer  className="custom-footer">
          <div className="container">
            <div className="footer-row">
              <div className="footer-column">
                <h3 className="text-highlight font-light mb-2">
                  
                </h3>
                <h4 className="font-light">
                  
                </h4>
              </div>
              <div className="footer-column text-center social-buttons">
                <a
                  className="btn-circle github-link"
                  href="https://github.com/tomasdelclaux/dbfront"
                  id="github-tooltip-trigger"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
                <div className="tooltip-custom" id="github-tooltip">
                  Group 26
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
