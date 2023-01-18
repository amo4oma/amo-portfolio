import React,{useEffect, useRef} from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import "../../../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";
import {TweenMax, Power3, gsap} from 'gsap';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Home2() {
  let avatarAnim = useRef(null);
  let Icons = useRef(null);

  useEffect(() => {
    gsap.to(avatarAnim, {
      y: -100,
      duration: 3,
      ease: "bounce",
      delay: 2,
      scrollTrigger: {
        trigger: '.img-fluid'
      }
    });
    gsap.from(".home-about-social", {
      y: 100,
      duration: 3,
      ease: "bounce",
      delay: 2,
      toggleActions: 'play none none none',
      scrollTrigger: {
        trigger: ".home-about-social"
      }
    });
  }, []);
  
  
  
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> HTML, CSS and Javascript. </b>
              </i>
              <br />
              <br />
              My current focus is on &nbsp;
              <i>
                <b className="purple">
                  React js, React Native, & Flutter development 
                </b>
              </i>
              <br />
              <br />
              I am a Back-end developer as well, I enjoy coding with 
              <i>
                <b className="purple"> Django & Node.js</b>
              </i>
              <i>
                <b className="purple">I am a Full-stack developer </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img ref={el => {avatarAnim = el}} src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12}  className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/amo4oma"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <GitHubIcon />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Ahmedobad4"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <TwitterIcon />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ahmed-obad-6b4b7274/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <LinkedInIcon />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ahmedobad/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
