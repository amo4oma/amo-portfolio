import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
 
import Resumecontent from "./ResumeContent";
import "../../../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/AHMED-OBAD-CV-Oct2020.pdf";
import Layout from "../../components/Layout";

function Resume() {
  return (
    <Layout>
    <Container fluid className="resume-section">
 
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Creative Unicorn Malaysia"
              date=" 2021 - Current (Remotely"
              content={[
                "Front-end Developer at Creative Unicorn Agency Malaysia"
              ]}
            />
            <Resumecontent
              title="RNW"
              date=" 2018 - 2020"
              content={[
                "Web developer & Information Management "
              ]}
            />
            <Resumecontent
              title="Ecompile Malaysia"
              date=" 2020 - 2021"
              content={[
                "Front-end Developer at Ecompile co. Malaysia"
              ]}
            />
            
            <Resumecontent
              title="I.T officer and tour coordinator [Dulaimy Traver & tours company]"
              date="2016- 2020"
              content={[
                "Created , and manging the company website , tickiting , booking and tour coordinator  .",
              ]}
            />
            <Resumecontent
              title="Project Manger [ARABI Midea Group]"
              date="2015-2016"
              content={[
                "Manger of the Radio station of ARABI Midea Group",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="MBA [UTHM, Malaysia] "
              date="2020 - 2022"
              content={[`CGPA: 3.6`]}
            />
            <Resumecontent
              title="INFORMATION & COMMUNICATION TECHNOLOGY [LUCT ,Malaysia]"
              date="2012 - 2015"
              content={["CGPA: 3.71"]}
            />
           
          
      
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
    </Layout>
  );
}

export default Resume;
