import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Image, Button, Container, Navbar, Nav } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { Routes } from "../routes";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";


export default () => {

  return (
    <>
      <Navbar variant="dark" expand="lg" bg="dark" className="navbar-transparent navbar-theme-primary sticky-top">
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 d-flex align-items-center">
            <Image src={ReactHero} />
            <span className="ms-2 brand-text d-none d-md-inline">BHUMISTAR - Furniture</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
                <Nav.Link as={HashLink} to="#dashboard">Profile</Nav.Link>
                <Nav.Link as={HashLink} to="#features">Features</Nav.Link>
                <Nav.Link as={HashLink} to="#getting-started">Getting Started</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>

      <section className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-12 bg-primary text-white" id="home" style={{height: 90 +"vh"}}>
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <div className="react-big-icon d-none d-lg-block"><span className="fab fa-react"></span></div>
              <h1 className="fw-bolder text-secondary">WELCOME</h1>
              <p className="text-muted fw-light mb-5 h5">Let's Begin Your Journey With Us.</p>
              <div className="d-flex align-items-center justify-content-center">
                <Button variant="secondary" as={Link} to={Routes.DashboardOverview.path} className="text-dark me-3">
                  Explore dashboard <FontAwesomeIcon icon={faExternalLinkAlt} className="d-none d-sm-inline ms-1" />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
