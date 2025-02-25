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
// nodejs library that concatenates classes

// reactstrap components
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Row,
  Col,
} from "reactstrap";

// core components
import Navbar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import Chart_m_2_1 from "../components/Chart_m_2_1.js";
import Divider from "../components/Divider.js"


class DatabaseCount extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        count: this.getCount()
    };
    this.getCount = this.getCount.bind(this);
  }

  getCount() {
        fetch('http://127.0.0.1:5000/records_count', {
            method: 'POST',
            body: JSON.stringify({
              // Add parameters here
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
             .then((response) => response.json())
             .then((data) => {
                console.log(data);
                this.setState({count:data.data.records_count});
                // Handle data
             })
             .catch((err) => {
                console.log(err.message);
             });
    }

  render() {
    console.log("hello",this.state);
    return (
      <>
        <Navbar />
        <main ref="main">
        <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-shaped">
              <div className="shape shape-style-3 shape-primary">
              </div>
              <container>
                <Row className="justify-content-center">
                    <div className="text-center mt-5">
                        <h1 className='text-white'>Total Data collect is from: </h1>
                        <h4 className='text-white'>{this.state.count}</h4>
                        <h1 className='text-white'> Tuples</h1>
                    </div>
                </Row>
            </container>
            </section>
        </div>
        </main>
        <Footer>
        </Footer>
      </>
    );
  }
}

export default DatabaseCount;
