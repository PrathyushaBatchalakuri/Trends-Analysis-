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
import Chart_m_4_1 from "../components/Chart_m_4_1.js";
import Chart_m_4_2 from "../components/Chart_m_4.js";
import Divider from "../components/Divider.js"


class GDP extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        m_4_1: {
          topN: "10", // Default value for topN for m_4_1
          from: "2005", // Default start year for m_4_1
          to: "2019", // Default end year for m_4_1
          data: null
        },
        m_4_2: {
          topN: "10", // Default value for topN for m_4_2
          from: "2001", // Default start year for m_4_2
          to: "2020", // Default end year for m_4_2
          data: null
        }
      };
      // Bindings for your methods
      this.topNCountries = this.topNCountries.bind(this);
      this.changeYear = this.changeYear.bind(this);
      this.changeTopN = this.changeTopN.bind(this);
      this.fetchData = this.fetchData.bind(this);
    }
  
    componentDidMount() {
        this.fetchData('mockup_4_1', this.state.m_4_1.topN, this.state.m_4_1.from, this.state.m_4_1.to);
        setTimeout(() => {
            this.fetchData('mockup_4_2', this.state.m_4_2.topN, this.state.m_4_2.from, this.state.m_4_2.to);
        }, 500); // Delay the second request by 500ms
    }
    
  
    fetchData(url, topN, from, to) {
        fetch(`http://127.0.0.1:5000/${url}`, {
          method: 'POST',
          body: JSON.stringify({ topN, from, to }),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        })
        .then((response) => response.json())
        .then((data) => {
          switch(url) {
            case 'mockup_4_1':
              this.setState({ m_4_1: { ...this.state.m_4_1, data: data.data } });
              break;
            case 'mockup_4_2':
              this.setState({ m_4_2: { ...this.state.m_4_2, data: data.data } });
              break;
            // Add more cases here if you have more URLs to handle
            default:
              console.log('Unknown URL');
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
      }
  topNCountries(url){
    const years = [2,3,4,5,6,7,8,9,10,11,12,13,14, 15]
    console.log("years", years);
    const options = []
    for(let i=0; i<years.length; i++){
        options.push(<DropdownItem className="dropdown-item" onClick={e=>this.changeTopN(e,years[i], url)}><div>{years[i]}</div></DropdownItem>);
    }
    return options;
  }
  yearList41(param, url){
    const yearList = [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018];
    const options = []
    for(let i=0; i<yearList.length; i++){
        options.push(<DropdownItem onClick={e=>this.changeYear(e,yearList[i], param, url)}><div>{yearList[i]}</div></DropdownItem>);
    }
    return options;
  }

  yearList42(param, url){
    const yearList = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018];
    const options = []
    for(let i=0; i<yearList.length; i++){
        options.push(<DropdownItem onClick={e=>this.changeYear(e,yearList[i], param, url)}><div>{yearList[i]}</div></DropdownItem>);
    }
    return options;
  }
//   get_m_1_2(){
//     fetch('http://127.0.0.1:5000/mockup_1_2', {
//             method: 'POST',
//             body: JSON.stringify({
//               // Add parameters here
//             }),
//             headers: {
//               'Content-type': 'application/json; charset=UTF-8',
//             },
//           })
//              .then((response) => response.json())
//              .then((data) => {
//                 console.log(data);
//                 var temp = this.state.m_1_2;
//                 temp.data = data.data;
//                 this.setState({m_1_2:temp});
//                 // Handle data
//              })
//              .catch((err) => {
//                 console.log(err.message);
//              });
//   }

changeTopN(e, n, url) {
    var param_topN = null;
    var param_from = null;
    var param_to = null;
    switch(url){
        case "mockup_4_1":
            this.state.m_4_1.topN = n;
            param_topN = n;
            param_from = this.state.m_4_1.from;
            param_to = this.state.m_4_1.to;
            break; 
        case "mockup_4_2":
            this.state.m_4_2.topN = n;
            param_topN = n;
            param_from = this.state.m_4_2.from;
            param_to = this.state.m_4_2.to;
            break;
    }
    this.setState({state: this.state});
    if(param_from != "select" && param_to != "select"){
        fetch(`http://127.0.0.1:5000/${url}`, {
            method: 'POST',
            body: JSON.stringify({
                topN: param_topN,
                from: param_from,
                to: param_to
              // Add parameters here
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
             .then((response) => response.json())
             .then((data) => {
                console.log(data);
                switch(url){
                    case "mockup_4_1":
                        var temp = this.state.m_4_1;
                        temp.data = data.data;
                        this.setState({m_4_1:temp});
                        break;
                    case "mockup_4_2":
                      var temp = this.state.m_4_2;
                      temp.data = data.data;
                      this.setState({m_4_2:temp});
                      break;
                  }
                // Handle data
             })
             .catch((err) => {
                console.log(err.message);
             });
    }
  }

  changeYear(e, n, param, url) {
    var param_from = null;
    var param_topN = null;
    var param_to = null;
    if(param=="to"){
        switch(url){
            case "mockup_4_1":
                this.state.m_4_1.to=n;
                param_topN = this.state.m_4_1.topN;
                param_from = this.state.m_4_1.from;
                param_to = n;
                break;
            case "mockup_4_2":
                this.state.m_4_2.to=n;
                param_from = this.state.m_4_2.from;
                param_topN = this.state.m_4_2.topN;
                param_to = n;
                break;
        }
        this.setState({state: this.state});
    }
    else{
        switch(url){
            case "mockup_4_1":
                this.state.m_4_1.from=n;
                param_topN = this.state.m_4_1.topN;
                param_from = n;
                param_to = this.state.m_4_1.to;
                break;
            case "mockup_4_2":
                this.state.m_4_2.from=n;
                param_from = n;
                param_topN = this.state.m_4_2.topN;
                param_to = this.state.m_4_2.to;
                break;
        }
        this.setState({state: this.state});
    }
    if(param=="to"){
        if(param_from != "select"){
            fetch(`http://127.0.0.1:5000/${url}`, {
                method: 'POST',
                body: JSON.stringify({
                  from: param_from,
                  topN: param_topN,
                  to: param_to
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                 .then((response) => response.json())
                 .then((data) => {
                    console.log(data);
                    switch(url){
                      case "mockup_4_1":
                        var temp = this.state.m_4_1;
                        temp.data = data.data;
                        this.setState({m_4_1:temp});
                        break;
                      case "mockup_4_2":
                            var temp = this.state.m_4_2;
                            temp.data = data.data;
                            this.setState({m_4_2:temp});
                            break;
                    }
                 })
                 .catch((err) => {
                    console.log(err.message);
                 });
        }
    }
    else if(param="from"){
        if(param_to != "select"){
            fetch(`http://127.0.0.1:5000/${url}`, {
                method: 'POST',
                body: JSON.stringify({
                    from: param_from,
                    topN: param_topN,
                    to: param_to
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                 .then((response) => response.json())
                 .then((data) => {
                    console.log(data);
                    switch(url){
                        case "mockup_4_1":
                          var temp = this.state.m_4_1;
                          temp.data = data.data;
                          this.setState({m_4_1:temp});
                          break;
                        case "mockup_4_2":
                            var temp = this.state.m_4_2;
                            temp.data = data.data;
                            this.setState({m_4_2:temp});
                            break;
                      }
                    // Handle data
                 })
                 .catch((err) => {
                    console.log(err.message);
                 });
        }
    }
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
              <div className="shape shape-style-1 shape-primary">
              </div>
            </section>  
            <section className="section">
            <container>
                <Row className="justify-content-center">
                    <div align="center">
                        <h3>Global GDP ranks</h3>
                    </div>
                </Row>
                <Row className="justify-content-center">
                    <Col>
                    <Row>
                        <Col>
                                <div align="center">
                                    <h5 className='text-black'>Top N Countries</h5>
                                    <UncontrolledDropdown group>
                                    <DropdownToggle caret>
                                    {this.state.m_4_1.topN}
                                    </DropdownToggle>
                                    <DropdownMenu container={'body'}>
                                        {this.topNCountries("mockup_4_1")}
                                    </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <div align="center">
                                <h5>Date Range</h5>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                          <Col></Col>
                            <Col>
                                <div align="center">
                                <h6 className='text-black'>From</h6>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.m_4_1.from}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                        {this.yearList41("from", "mockup_4_1")}
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                            <Col></Col>
                            <Col>
                                <div align="center">
                                <h6 className='text-black'>To</h6>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.m_4_1.to}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                        {this.yearList41("to", "mockup_4_1")}
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Col>
                    <Col lg="7" className="align-self-center">
                        <Chart_m_4_1 data={this.state.m_4_1.data}/>
                    </Col>
                    <Col lg="2" className="align-self-center mr-4">
                        <div>
                            <p>The chart presents the dynamic shifts in the GDP rankings of various countries over time.</p>
                        </div>
                    </Col>
                </Row>
            </container>
            </section>
            <Divider></Divider>
            <section className="section">
            <container>
                <Row className="justify-content-center">
                    <div align="center">
                        <h3>World GDP by Countries</h3>
                    </div>
                </Row>
                <Row>
                    <Col>
                    <Row>
                        <Col>
                                <div align="center">
                                    <h5 className='text-black'>Top N Countries</h5>
                                    <UncontrolledDropdown group>
                                    <DropdownToggle caret>
                                    {this.state.m_4_2.topN}
                                    </DropdownToggle>
                                    <DropdownMenu container={'body'}>
                                        {this.topNCountries("mockup_4_2")}
                                    </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div>
                            </Col>
                        </Row>
                        <br></br>
                    <Row>
                            <Col>
                                <div align="center">
                                <h5>Date Range</h5>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                          <Col></Col>
                            <Col>
                                <div align="center">
                                <h6 className='text-black'>From</h6>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.m_4_2.from}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                        {this.yearList42("from", "mockup_4_2")}
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                            <Col></Col>
                            <Col>
                                <div align="center">
                                <h6 className='text-black'>To</h6>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.m_4_2.to}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                        {this.yearList42("to", "mockup_4_2")}
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Col>
                    <Col lg="7" className="align-self-center">
                        <Chart_m_4_2 data={this.state.m_4_2.data}/>
                    </Col>
                    <Col lg="2" className="align-self-center">
                        <div>
                            <p><li>The chart showcases the top 10 GDP countries, while the remaining nations are aggregated into a 
                                single category to represent their relative global position.</li>

                                <li>From the chart, it is evident that the 'Rest of Countries' category has experienced substantial growth, 
                                particularly at the beginning of the current decades, indicating global development trends</li></p>
                        </div>
                    </Col>
                </Row>
            </container>
            </section>
        </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default GDP;
