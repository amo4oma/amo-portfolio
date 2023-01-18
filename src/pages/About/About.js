import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
import "../../../styles/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.svg";
import {Helmet} from "react-helmet";
import Layout from "../../components/Layout";

function About() {
  return (
    <>
             <Helmet>    
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"></link>
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
       
          
      </Helmet>
  <Layout>
    <Container fluid className="about-section">
 
      <Container>
 
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skill set </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}xs={2} md={4} lg={6}>
        
          <Techstack iconName="devicon-javascript-plain" />
          <Techstack iconName="devicon-jquery-plain-wordmark"></Techstack>
          <Techstack iconName="devicon-html5-plain-wordmark " />
          <Techstack iconName="devicon-css3-plain-wordmark" />
          <Techstack iconName="devicon-sass-original" />
          <Techstack iconName="devicon-nextjs-plain" />
          <Techstack iconName="devicon-vuejs-plain" />
          <Techstack iconName="devicon-gatsby-plain" />
          <Techstack iconName="devicon-babel-plain" />
          <Techstack iconName="devicon-jquery-plain" />
          <Techstack iconName="devicon-django-plain " />
          <Techstack iconName="devicon-php-plain" />
          <Techstack iconName="devicon-python-plain" />
          <Techstack iconName="devicon-react-original-wordmark" />
          <Techstack iconName="devicon-nodejs-plain-wordmark " />
          <Techstack iconName="devicon-laravel-plain-wordmark " />
          <Techstack iconName="devicon-express-original-wordmark" />
          <Techstack iconName="devicon-mongodb-plain-wordmark" />
          <Techstack iconName="devicon-git-plain-wordmark" />
          <Techstack iconName="devicon-bootstrap-plain-wordmark" />
          <Techstack iconName="devicon-postgresql-plain-wordmark" />
          <Techstack iconName="devicon-mysql-plain" />
          <Techstack iconName="devicon-sqlite-plain" />
          
          
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }} xs={2} md={4} lg={6}>
         
          <Techstack iconName="cib-visual-studio-code" />
          <Techstack iconName="devicon-atom-original" />
          <Techstack iconName="devicon-github-original-wordmark" />
          <Techstack iconName="devicon-illustrator-plain" />
          <Techstack iconName="devicon-npm-original-wordmark" />
          <Techstack iconName="devicon-wordpress-plain" />
          <Techstack iconName="devicon-google-plain" />
          <Techstack iconName="devicon-figma-plain" />
          
          <Techstack iconName="cib-postman" />
        
        </Row>
        <Github />
      </Container>
    </Container>
    </Layout>
    </>
  );
}

export default About;
