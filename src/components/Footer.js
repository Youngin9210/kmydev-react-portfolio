import React from "react";
import { Col, Container, ListGroup } from "react-bootstrap";
import { FaGithubSquare, FaLinkedin, FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function NavBar() {
  let year = new Date().getFullYear();
  return (
    <Container
      id="footer"
      fluid
      className="d-flex flex-wrap-reverse justify-content-between text-center py-2"
    >
      <Col
        xs={12}
        lg={4}
        className="d-flex align-items-center justify-content-center py-1"
      >
        <a href="https://storyset.com/work" className="attribution">
          Work illustrations by Storyset
        </a>
      </Col>
      <Col
        xs={12}
        lg={4}
        className="d-flex align-items-center justify-content-center py-1"
      >
        <h5>Copyright &copy; {year} KMYdev</h5>
      </Col>
      <Col
        xs={12}
        lg={4}
        className="d-flex align-items-center justify-content-center py-1"
      >
        <ListGroup horizontal className="footerList">
          <ListGroup.Item className="footerItem">
            <a
              className="footerLink"
              href="https://www.linkedin.com/in/kyle-young-2305b032/"
            >
              <FaLinkedin />
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="footerItem">
            <a
              className="footerLink"
              href="https://github.com/Youngin9210"
              target="_blank"
            >
              <FaGithubSquare />
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="footerItem">
            <a className="footerLink" href="" target="_blank">
              <FaPhone
                onClick={(e) => {
                  window.location = "tel:+19376702584";
                  e.preventDefault();
                }}
              />
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="footerItem">
            <a
              className="footerLink"
              href="#"
              target="_blank"
              onClick={(e) => {
                window.location =
                  "mailto:kyleyoung.9210@gmail.com?subject=Portfolio";
                e.preventDefault();
              }}
            >
              <SiGmail />
            </a>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Container>
  );
}
