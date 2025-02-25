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
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

async function loginUser(credentials) {
  return fetch('http://127.0.0.1:5000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

function Login({setToken}) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleUnAuth = () => {
    console.log("leading to 404 page");
    navigate("/404"); // new line
  };

  const handleSubmit = async e => {
    console.log("sending login request")
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    if(token.data.token=="unAuth"){
      handleUnAuth();
    }
    else{
      setToken(token.data);
    }
  }
    return (
      <>
        <section className="section section-lg section-shaped">
          <div className="shape shape-style-3 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="row-grid justify-content-between align-items-center">
              <Col lg="6">
                <h3 className="display-3 text-black">
                  US Immigration Index{" "}
                  <span className="text-black">Trends and Factors</span>
                </h3>
                <p className="lead text-black">
                  Project displays the trends and factors driving immigration trends in views with respect to
                  population, socio-economic factors, distribution of jobs, employment sectors
                </p>
              </Col>
              <Col className="mb-lg-auto" lg="5">
                <div className="transform-perspective-center">
                  <Card className="bg-transparent shadow border-2">
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center display-3 text-black mb-7">
                        <small>Sign in with credentials</small>
                      </div>
                      <Form role="form" onSubmit={handleSubmit}>
                        <FormGroup
                          className={classnames("mb-3", {
                            // focused: this.state.emailFocused,
                          })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email"
                              type="email"
                              onChange={e => setUserName(e.target.value)}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              type="password"
                              autoComplete="off"
                              onChange={e => setPassword(e.target.value)}
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="customCheckLogin2"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheckLogin2"
                          >
                            <span>Save for later use</span>
                          </label>
                        </div>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="warning"
                            type="submit"
                          >
                            Sign in
                          </Button>
                          <Link to="/register">
                          <Button
                            className="btn"
                            color="warning"
                          >
                            Register Page
                        </Button>
                        </Link>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns=""
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              {/* <polygon className="fill-" points="2560 0 2560 100 0 100" /> */}
            </svg>
          </div>
        </section>
      </>
    );
  }

  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };

   
export default Login;
