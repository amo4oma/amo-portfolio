import React,{useEffect, useRef} from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogsCards from "./BlogsCards";


import "../../../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
 
import solveinhere from "../../Assets/solveinhere.png"
import pressmetal from "../../Assets/pressmetal.png"
import setel_1 from "../../Assets/setel-1png.png"
import wellness from "../../Assets/360.png"
import playbook from "../../Assets/playbook.png"
import gawbah from "../../Assets/gawbah.png"
import whaitJelly from "../../Assets/whaitJelly.png";
import SHB from "../../Assets/SHB.png"
import redjelly from "../../Assets/bg-pattern-boxed.png"
import CreativeUni1 from "../../Assets/Projects/jobstreet-1.png"
import CreativeUni2 from "../../Assets/Projects/jobstreet-2.png"
 
import reactnativeblog from "../../Assets/react.png"
import homran from "../../Assets/Projects/homran.jpg";
import GNV from "../../Assets/GNV.png";
import Foucs from "../../Assets/foucs.png";
import ERA from "../../Assets/SKOLL.png";
import keeper from "../../Assets/keeper.png";
import happytrip from "../../Assets/Projects/happytrip.png";
import ATT from '../../Assets/Projects/ATT.gif'
import facapp from "../../Assets/Projects/facapp.gif";
import cloths from "../../Assets/Projects/cloths.gif";
import ropot from "../../Assets/Projects/ropot.jpg";
import plant from "../../Assets/Projects/plant.jpg";
import CV from "../../Assets/Projects/cv.png";
import UV from "../../Assets/UV.png";
import Landing from "../../Assets/landing.png";
import Tilt from "react-parallax-tilt";

import {TweenMax, Power3, gsap} from 'gsap';
import Layout from "../../components/Layout";


function Projects() {
 

  useEffect(() => {
    gsap.from(".porject-1", {
      x: -20,
      duration: 3,
      ease: "bounce",
      delay: 2,
      opacity:0,
      scrollTrigger: {
        trigger: ".project-card"
      }
    });
 
  }, []);
  return (
    <Layout>
    <Container fluid className="project-section">
   
      <Container>
      
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
       
            <ProjectCard
            className="porject-1"
              imgPath={solveinhere}
              isBlog={false}
              title="all the front end dev of solveinhere"
              description="an online platform where you can conduct professional consultation with experts from all over the world,"
              link="https://amo4oma.github.io/test/"
            />
        
          </Col>
          <Col md={4} className="project-card">
       
            <ProjectCard
            className="porject-1"
              imgPath={UV}
              isBlog={false}
              title="Website for DUV astalift Singapore"
              description="Landing page for a leading cosmetic company"
              link="https://amo4oma.github.io/atalift-uv/"
            />
        
          </Col>
          <Col md={4} className="project-card">
       
            <ProjectCard
            className="porject-1"
              imgPath={pressmetal}
              isBlog={false}
              title="Developed the web app using React.js "
              description="landing page for a leading company based in Malaysia"
              link="https://www.pressmetal.com/esg"
            />
        
          </Col>
          <Col md={4} className="project-card">
       
            <ProjectCard
            className="porject-1"
              imgPath={setel_1}
              isBlog={false}
              title="Developed the web app using React.js "
              description="landing page for a leading company based in Malaysia"
              link="https://www.setel.com/promotions/one-tap-fuelling"
            />
        
          </Col>
    
          <Col md={4} className="project-card">
          <Tilt>
            <ProjectCard
            className="porject-1"
              imgPath={wellness}
              isBlog={false}
              title="360Wellness web App"
              description="an online platform where you can get a professional trainer online "
              link="https://360wellness.app/"
            />
            </Tilt>
          </Col>
          <Col md={4} className="project-card">
          <Tilt>
            <ProjectCard
            className="porject-1"
              imgPath={Landing}
              isBlog={false}
              title="Fully Animated Landing Page"
              description="Creative landing page with many animations integration"
              link="https://amo4oma.github.io/cu-landingpage/"
            />
            </Tilt>
          </Col>
          <Col md={4} className="project-card">
          <Tilt>
            <ProjectCard
            className="porject-1"
              imgPath={playbook}
              isBlog={false}
              title="360Wellness web App"
              description="an online platform where you can get a professional trainer online "
              link="http://www.creativeunicorn.com/staging/360Playbook/"
            />
            </Tilt>
          </Col>
          <Col md={4} className="project-card">
          <Tilt>
            <ProjectCard
              imgPath={SHB}
              isBlog={false}
              title="Microsite for Financial services company (Creative Unicorn)"
              description="one of my works for Creative Unicorn Agency"
              link="https://creative-unicorn-microsite-sbh-group-barryloh.vercel.app/"
            />
            </Tilt>
          </Col>
          <Col md={4} className="project-card">
          <Tilt>
            <ProjectCard
              imgPath={whaitJelly}
              isBlog={false}
              title="Fully Animated landing page for Astalift White Jelly"
              description="one of my works for Creative Unicorn Agency"
              link="https://amo4oma.github.io/astalift-white-jelly/"
            />
            </Tilt>
          </Col>
          <Col md={4} className="project-card">
          <Tilt>
            <ProjectCard
              imgPath={redjelly}
              isBlog={false}
              title="Landing page for a company (Creative Unicorn)"
              description="on of my works for Creative Unicorn Agency"
              link="https://amo4oma.github.io/astalift-jilly/"
            />
            </Tilt>
          </Col>
          <Col md={4} className="project-card">
          <Tilt>
            <ProjectCard
              imgPath={CreativeUni1}
              isBlog={false}
              title="Case study MicroSite"
              description="one of my works for Creative Unicorn Agency"
              link="http://www.creativeunicorn.com/staging/casestudy/jobstreet"
            />
            </Tilt>
          </Col>
          <Col md={4} className="project-card">
          <Tilt>
            <ProjectCard
              imgPath={CreativeUni2}
              isBlog={false}
              title="Case study MicroSite"
              description="one of my works for Creative Unicorn Agency"
              link="http://www.creativeunicorn.com/staging/casestudy/jobstreet-2"
            />
            </Tilt>
          </Col>
          <Col md={4} className="project-card">
          <Tilt>
            <ProjectCard
              imgPath={Foucs}
              isBlog={false}
              title="Focus App using React Native"
              description="I have created a countdown app helps you focus in doing tasks"
              link="https://snack.expo.io/@ahmedmobad/focustime"
            />
            </Tilt>
          </Col>
          <Col md={4} className="project-card">
          <Tilt>
            <ProjectCard
              imgPath={keeper}
              isBlog={false}
              title="Todo App"
              description="To Do app using React Js  "
              link="https://keeper-react-app.netlify.app/"
            />
            </Tilt>
          </Col>
          <Col md={4} className="project-card">
          <Tilt>
            <ProjectCard
              imgPath={gawbah}
              isBlog={false}
              title="Gowbah Corporation for Transport, Contracting and Oil Services"
              description="Gowbah Website"
              link="http://gawbah.com/"
            />
            </Tilt>
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={homran}
              isBlog={false}
              title="Car Rental website"
              description="A website for car rental based in Selengor Malaysia " link="https://amo4oma.github.io/like-master/"
            />
          </Col>
          <Col md={4} className="project-card">
          <Tilt>
            <ProjectCard
              imgPath={GNV}
              isBlog={false}
              title="E-commerce Website for Vibe based in the USA"
              description="I have made this website useing Wordpress , its an E-commerce for selling Vibes and e-cigirate  "
              link="https://gnvwholesale.com/"
            />
            </Tilt>
          </Col>
           <Col md={4} className="project-card">
          <Tilt>
            <ProjectCard
              imgPath={ERA}
              isBlog={false}
              title="E-commerce Website (Shopify)"
              description="I have build this website using Shopify platform."
              link="https://skollcollection.com/"
            />
            </Tilt>
          </Col>
          <Col md={4} className="project-card">
          <Tilt>
            <ProjectCard
              imgPath={happytrip}
              isBlog={false}
              title="Toursim website"
              description="I have created this website fro Happy Trip toursim Company "
              link="https://amo4oma.github.io/dulaimy/"
            />
            </Tilt>
          </Col>
 
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facapp}
              isBlog={false}
              title="Face Recognition React App"
              description="Using React Js, Node , Express , PostgresDB and APIs I have created a web app that recognize faces from images ."
              link="https://github.com/amo4oma/faceapp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plant}
              isBlog={false}
              title="Landing page for start-up company"
              description="A website that intoduce a start-up company called EvertThing."
              link="https://amo4oma.github.io/everything/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://media.giphy.com/media/JT2TxTgfVyMV6C7By7/giphy.gif"
              isBlog={false}
              title="IMDb movie Mobile app "
              description="while I was learning React Native for mobile application I have created this app that get the data from IMDb API and display it to the user and the user can search for movies as well."
              link="https://github.com/amo4oma/moviedb"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloths}
              isBlog={false}
              title="e-commerce website "
              description="Useing React, Firebase, redux, and more I am working on an e-commerce website"
              link="https://github.com/amo4oma/crwn-clothing"
            />
          </Col>
    
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ropot}
              isBlog={false}
              title="Ropot Friends App "
              description="Useing React, Api I created a live search ropots app and that was my first app Using React 😀 "
              link="https://amo4oma.github.io/robofriends/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ATT}
              isBlog={false}
              title="ATT car rental website"
              description="a car rental website for ATT company"
              link="https://amo4oma.github.io/att-carrental/"
            />
          </Col>
          <Col md={4} className="blog-card">
            <ProjectCard
              imgPath={CV}
              title="My old Portfolio"
              description="Useing a HTML , SCSS , bootstrap , and JS i have made my portfolio and resume website "
              link="https://amo4oma.github.io/amo-cv/"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogsCards
              imgPath={reactnativeblog}
              title="An article about cross platform"
              description="for those who are interested in Mobile app development, this  great  framework will help you to create a cross platform native Apps  ,, check it out  👇"
              link="https://ahmd4obad.medium.com/creating-native-apps-for-mobile-by-react-native-f5aa9a689d8b"
            />
          </Col>
        </Row>
      </Container>
    </Container>
    </Layout>
  );
}

export default Projects;
