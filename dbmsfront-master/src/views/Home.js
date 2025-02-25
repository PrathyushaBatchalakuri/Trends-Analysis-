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
import React from "react";
import { Link } from 'react-router-dom';
// nodejs library that concatenates classes

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import Navbar from "../components/NavBar.js";
import Footer from "../components/Footer.js";


class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <Navbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-200">
              <div className="shape shape-style-3 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-1">
                  <Row>
                    <Col lg="5">
                      <h1 className="display-2 text-white">
                        Immigration Trends{" "}
                      </h1>
                      <p className="lead text-white">
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
            </section>
          </div>

          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-right">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="6">
                      <Card className="shadow border-0s">
                        <CardBody className="py-5">
                        {/* <img
                        alt="..."
                        className="img-fluid"
                        src={require("../assets/img/bear.jpg")}
                        /> */}
                          <h6 className="text-warning text-uppercase">
                            Query 1
                          </h6>
                          <p className="description mt-3">
                          Investigating the trend in dynamic of employers engaging in H-1B Visa sponsorships.
                          </p>
                          <Link to="/Query2">
                                <Button className="mt-4" color="warning">
                                    View Trend 1
                                </Button>
                            </Link>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="6">
                      <Card className="shadow border-0">
                        <CardBody className="py-5">
                        {/* <img
                        alt="..."
                        className="img-fluid"
                        src={require("../assets/img/factory.jpg")}
                        /> */}
                          <h6 className="text-warning text-uppercase">
                            Query 2
                          </h6>
                          <p className="description mt-3">
                           
                          Trend analysis on how the wages have evolved within various sectors considering the skill levels of employees. 
                          </p>
                          <Link to="/Query4">
                                <Button className="mt-4" color="warning">
                                View Trend 2
                                </Button>
                            </Link>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="row-grid">
                  <Col lg="6">
                      <Card className="shadow border-0">
                        <CardBody className="py-5">
                        {/* <img
                        alt="..."
                        className="img-fluid"
                        src={require("../assets/img/electricity.png")}
                        /> */}
                          <h6 className="text-warning text-uppercase">
                            Query 3
                          </h6>
                          <p className="description mt-3">
                          Trends in distribution of job titles and skill levels among foreign workers.
                          </p>
                          <Link to="/Query3">
                                <Button className="mt-4" color="warning">
                                View Trend 3
                                </Button>
                            </Link>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="6">
                      <Card className="shadow border-0">
                        <CardBody className="py-5">
                        {/* <img
                        alt="..."
                        className="img-fluid"
                        src={require("../assets/img/gdp.jpg")}
                        /> */}
                          <h6 className="text-warning text-uppercase">
                            Query 4
                          </h6>
                          <p className="description mt-3">
                          Analyze the trend in various sectors and states to understand which state has high count of immigrants in a particular sector. 
                          </p>
                          <Link to="/Query5">
                                <Button className="mt-4" color="warning">
                                    View Trend 4
                                </Button>
                            </Link>
                        </CardBody>
                      </Card>
                    </Col>
                    
                  </Row>
                  <Row className="row-grid">
                  <Col lg="12">
                      <Card className="shadow border-0">
                        <CardBody className="py-5">
                        {/* <img
                        alt="..."
                        className="img-fluid"
                        src={require("../assets/img/internet.jpg")}
                        /> */}
                          <h6 className="text-warning text-uppercase">
                            Query 5
                          </h6>
                          <p className="description mt-3">
                          Analyze the trend in various sectors and states to understand which state has high count of immigrantsin a particular sector. 
                          </p>
                          <Link to="/Query1">
                                <Button className="mt-4" color="warning">
                                    View Trend 5
                                </Button>
                            </Link>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Landing;
