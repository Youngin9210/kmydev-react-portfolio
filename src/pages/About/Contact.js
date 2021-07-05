import React from "react";
import { Container } from "react-bootstrap";
import { FaLinkedin, FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <Container id="contact" className="text-center">
      <h1 className="display-3">Contact Me!</h1>
      <ul className="contactList">
        <li>
          <a
            className="contactLink"
            href="#"
            target="_blank"
            onClick={(e) => {
              window.location = "tel:+19376702584";
              e.preventDefault();
            }}
          >
            <FaPhone size="32" className="m-1" /> (937)-670-2584
          </a>
        </li>
        <li>
          <a
            className="contactLink"
            onClick={(e) => {
              window.location =
                "mailto:kyleyoung.9210@gmail.com?subject=Portfolio";
              e.preventDefault();
            }}
          >
            <SiGmail size="32" className="m-1" /> kmydev1719@gmail.com
          </a>
        </li>
        <li>
          <a
            className="contactLink"
            href="https://www.linkedin.com/in/kyle-young-2305b032/"
            target="_blank"
          >
            <FaLinkedin size="32" className="m-1" /> LinkedIn
          </a>
        </li>
      </ul>
    </Container>
  );
}
