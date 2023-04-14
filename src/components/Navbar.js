import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "../../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'gatsby'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';
import { BoyRounded } from "@mui/icons-material";


// import { Link } from "react-router-dom";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

 
 
  const scrollHandler = () => { 
    // Detect scroll position
    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth > 1100) {
        let scrollPosition = Math.round(window.scrollY);

        if (scrollPosition > 100){
          updateNavbar(true);
        }
        else {
          updateNavbar(false);
        }

    } else {

    }
};

// Check that window exists before accessing it
if (typeof window !== 'undefined') {
    // Run the checkHeader function every time you scroll
    window.addEventListener('scroll', scrollHandler);
}


  return (
    <>
 
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">
          <h1 style={{fontFamily:"'Audiowide', cursive"}} >AMO</h1>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item className="me-5">
           
              <Link to="https://ahmedobad.info/" onClick={() => updateExpanded(false)}><HomeIcon /> Home</Link> 
             
            </Nav.Item>
            <Nav.Item className="me-5">
              <Link
                
                to="/About"
                onClick={() => updateExpanded(false)}
              >
                <i className="far fa-user"></i><InfoIcon /> About
              </Link>
            </Nav.Item>
            <Nav.Item className="me-5">
              <Link className="link"
              
                to="/Projects"
                onClick={() => updateExpanded(false)}
              >
                <i className="fab fa-codepen"></i><AccountTreeIcon /> Projects
              </Link>
            </Nav.Item>
            <Nav.Item className="me-5">
              <Link
               
                to="/Resume"
                onClick={() => updateExpanded(false)}
              >
                <i className="far fa-file-alt"></i><AnalyticsIcon /> Resume
              </Link>
            </Nav.Item>
           
            <Nav.Item className="me-5">
              <Link
               
                to="/ContactMe"
                onClick={() => updateExpanded(false)}
              >
                <i class="far fa-envelope-open"></i><PermPhoneMsgIcon /> Contact Me
              </Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
 
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;
