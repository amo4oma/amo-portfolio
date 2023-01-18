import React from "react";
import "../../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed with 💜 by Ahmed Obad</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} AMO</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/amo4oma"
                style={{ color: "white" }}
              >
                <GitHubIcon />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/Ahmedobad4"
                style={{ color: "white" }}
              >
                <TwitterIcon />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ahmed-obad-6b4b7274/"
                style={{ color: "white" }}
              >
                <LinkedInIcon />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="/"
                style={{ color: "white" }}
              >
                <i className="fab fa-instagram" href="https://www.instagram.com/ahmedobad/"><InstagramIcon /></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
