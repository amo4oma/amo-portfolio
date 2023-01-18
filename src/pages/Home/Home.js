import React,{useEffect, useRef} from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
 
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";

import {TweenMax, Power3} from 'gsap';
import Layout from "../../components/Layout";


function Home({data}) {

  let homeImage = useRef(null);


  console.log(homeImage)
   
useEffect(() => {
  console.log(homeImage)
  TweenMax.to(homeImage,3,{opacity:1, y: -10, ease:Power3.easeIn})


}, []);


  return (
    <section>
    <Layout>
      <Container fluid className="home-section" id="home">
     
        <Container className="home-content">
      
          <Row className="home-row">
            <Col md={7} lg={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> AHMED OBAD</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} lg={6} style={{ paddingBottom: 20 , width: "100%"}}>
         
              <img ref={el => {homeImage = el}} src={homeLogo} alt="home pic" className="img-fluid home-page-image-1" />
           
            </Col>
          </Row>
     
        </Container>
      </Container>
      <Home2 />
      </Layout>
    </section>
    
  );
}

export default Home;
 