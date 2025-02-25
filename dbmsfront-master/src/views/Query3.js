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
import Chart_m_3 from "../components/Chart_m_3.js";
import Divider from "../components/Divider.js"


class Query3 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        // country: "United States",
        // agg: "Y",
        from: "2011",
        to: "2016",
        job_title: "Computer Programmers",
        skill:"Level I",
        xData: [],
        yData1: [] 
    };
    this.changeJob = this.changeJob.bind(this);

    this.changeSkillLevel = this.changeSkillLevel.bind(this);

    this.changeYear = this.changeYear.bind(this); 
    this.jobList = this.jobList.bind(this);
    this.skillLevelsList = this.skillLevelsList.bind(this);

  }

  componentDidMount() {
    this.fetchChartData();
  }
  
  fetchChartData() {
    fetch('http://127.0.0.1:5000/mockup_3', {
      method: 'POST',
      body: JSON.stringify({
        from: this.state.from,
        to: this.state.to,
        job_title: this.state.job_title,
        skill: this.state.skill
        
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((data) => {
      this.setState({xData: data.data.x, yData1: data.data.y3});
    })
    .catch((err) => {
      console.log(err.message);
    });
  }
  


  jobList(){
    const jobs = ['Computer Programmer','Software Developers','Applications','Computer Systems Analysts','Software Developers','Systems Software','Electronics Engineers','Except Computer','Computer Software Engineers','Applications','Computer and Information Systems Managers','Accountants and Auditors','Mechanical Engineers','Internists','General','Computer Systems Analyst','Database Administrators','Management Analysts','Financial Analysts','Marketing Managers','Electrical Engineers','Industrial Engineers','Statisticians','Materials Engineers','Financial Managers','Architectural and Engineering Managers','Network and Computer Systems Administrators'];
    console.log("job", jobs);
    const options = []
    for(let i=0; i<jobs.length; i++){
        options.push(<DropdownItem className="dropdown-item" onClick={e=>this.changeJob(e,jobs[i])}><div>{jobs[i]}</div></DropdownItem>);
    }
    return options;
  }

  yearList(param){
    const yearList = [2011,2012,2013,2014,2015,2016];
    const options = []
    for(let i=0; i<yearList.length; i++){
        options.push(<DropdownItem onClick={e=>this.changeYear(e,yearList[i], param)}><div>{yearList[i]}</div></DropdownItem>);
    }
    return options;
  }
  skillLevelsList(){
    const skills = ['Level I','Level II','Level III','Level IV'];
    console.log("JOBLIST", skills);
    const options = []
    for(let i=0; i<skills.length; i++){
        options.push(<DropdownItem className="dropdown-item" onClick={e=>this.changeSkillLevel(e,skills[i])}><div>{skills[i]}</div></DropdownItem>);
    }
    return options;
  }
  changeJob(e, n) {
    console.log(e);
    console.log(this);
    console.log(n)
    this.setState({job_title: n});
    if(this.state.from != "select" && this.state.to != "select" && this.state.skill != "select"){
        fetch('http://127.0.0.1:5000/mockup_3', {
            method: 'POST',
            body: JSON.stringify({
                // country: n,
                // agg: this.state.agg,
                from: this.state.from,
                to: this.state.to,
                job_title: this.state.job_title,
                skill: this.state.skill
              // Add parameters here
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
             .then((response) => response.json())
             .then((data) => {
                console.log(data);
                this.setState({xData: data.data.x, yData1: data.data.y3});
                // Handle data
             })
             .catch((err) => {
                console.log(err.message);
             });
    }
  }
  changeSkillLevel(e, n) {
    console.log(e);
    console.log(this);
    console.log(n)
    this.setState({skill: n});
    if(this.state.from != "select" && this.state.to != "select" && this.state.job_title != "select"){
        fetch('http://127.0.0.1:5000/mockup_3', {
            method: 'POST',
            body: JSON.stringify({
                // country: n,
                // agg: this.state.agg,
                from: this.state.from,
                to: this.state.to,
                job_title: this.state.job_title,
                skill: this.state.skill
                
              // Add parameters here
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
             .then((response) => response.json())
             .then((data) => {
                console.log(data);
                this.setState({xData: data.data.x, yData1: data.data.y3});
                // Handle data
             })
             .catch((err) => {
                console.log(err.message);
             });
    }
  }
  // changeAgg(e, n) {
  //   console.log(e);
  //   console.log(this);
  //   console.log(n)
  //   this.setState({agg: e.currentTarget.textContent});
  //   if(this.state.country != "select" && this.state.from != "select" && this.state.to != "select"){
  //       fetch('http://127.0.0.1:5000/mockup_5', {
  //           method: 'POST',
  //           body: JSON.stringify({
  //             country: this.state.country,
  //             agg: n,
  //             from: this.state.from,
  //             to: this.state.to
  //             // Add parameters here
  //           }),
  //           headers: {
  //             'Content-type': 'application/json; charset=UTF-8',
  //           },
  //         })
  //            .then((response) => response.json())
  //            .then((data) => {
  //               console.log(data);
  //               this.setState({xData: data.data.x, yData1: data.data.y1});
  //               // Handle data
  //            })
  //            .catch((err) => {
  //               console.log(err.message);
  //            });
  //   }
  // }
  changeYear(e, n, param) {
    console.log(e);
    console.log(this);
    console.log(n)
    if(param=="to"){
        this.setState({to: n});
    }
    else{
        this.setState({from: n});
    }
    if(param=="to"){
        if(this.state.job_title != "select" && this.state.from != "select" && this.state.skill != "select"){
            fetch('http://127.0.0.1:5000/mockup_3', {
                method: 'POST',
                body: JSON.stringify({
                //   country: this.state.country,
                  // agg: this.state.agg,
                  from: this.state.from,
                  to: n,
                  ec: this.state.ec,
                skill: this.state.skill
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                 .then((response) => response.json())
                 .then((data) => {
                    console.log(data);
                    this.setState({xData: data.data.x, yData1: data.data.y3});
                    // Handle data
                 })
                 .catch((err) => {
                    console.log(err.message);
                 });
        }
    }
    else if(param="from"){
        if(this.state.job_title != "select" && this.state.to != "select" && this.state.skill != "select"){
            fetch('http://127.0.0.1:5000/mockup_3', {
                method: 'POST',
                body: JSON.stringify({
                    // country: this.state.country,
                    // agg: this.state.agg,
                    from: n,
                    to: this.state.to,
                    ec: this.state.ec,
                    skill: this.state.skill
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                 .then((response) => response.json())
                 .then((data) => {
                    console.log(data);
                    this.setState({xData: data.data.x, yData1: data.data.y3});
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
              <div className="shape shape-style-3 shape-primary">
              </div>
              <container>
                <Row className="justify-content-center">
                    <div className="text-center mt-5">
                        {/* <h1 className='text-white'>IUP VS Growth Rate</h1> */}
                    </div>
                </Row>
              </container>
            </section>  
            <section className="section">
            <container>
                <Row className="justify-content-center">
                    <div align="center">
                        <h3>Trends over skill level and Jobs  </h3>
                    </div>
                </Row>
                <Row className="justify-content-center">
                    <Col>
                        <Row>
                        <Col>
                                <div align="center">
                                <h6 className='text-black'>From</h6>
                                <UncontrolledDropdown group>
                                <DropdownToggle caret>
                                {this.state.from}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                        {this.yearList("from")}
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
                                {this.state.to}
                                </DropdownToggle>
                                <DropdownMenu container={'body'}>
                                        {this.yearList("to")}
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
                                    <h5 className='text-black'>Job</h5>
                                    <UncontrolledDropdown group>
                                    <DropdownToggle caret>
                                    {this.state.job_title}
                                    </DropdownToggle>
                                    <DropdownMenu container={'body'}>
                                        {this.jobList()}
                                    </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div>
                            </Col>
                            <Col>
                                <div align="center">
                                    <h5 className='text-black'>Skill Level</h5>
                                    <UncontrolledDropdown group>
                                    <DropdownToggle caret>
                                    {this.state.skill}
                                    </DropdownToggle>
                                    <DropdownMenu container={'body'}>
                                        {this.skillLevelsList()}
                                    </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Col>
                    <Col lg="7" className="align-self-center">
                        { <Chart_m_3 x={this.state.xData} y1={this.state.yData1} /> }
                    </Col>
                    <Col lg="2" className="align-self-center mr-4">
                        <div>
                            {/* <p><li>The analysis aims to track and understand the evolving relationship between visa approvals and the respective country's population over a period of time.</li>

                            </p> */}
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

export default Query3;
