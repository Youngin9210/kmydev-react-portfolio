import React from 'react';
import { Col, Container, ListGroup } from 'react-bootstrap';
import { FaGithubSquare, FaLinkedin, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NavBar() {
	let year = new Date().getFullYear();
	return (
		<Container
			fluid
			className="d-flex justify-content-between text-center m-3 my-5"
		>
			<Col md={4} className="d-flex align-items-center justify-content-center">
				<h5>Designed and Developed by Kyle Young</h5>
			</Col>
			<Col md={4} className="d-flex align-items-center justify-content-center">
				<h5>Copyright &copy; {year} KMYdev</h5>
			</Col>
			<Col md={4} className="d-flex align-items-center justify-content-center">
				<ListGroup horizontal className="footerList">
					<ListGroup.Item className="footerItem">
						<Link
							className="footerLink"
							to="https://www.linkedin.com/in/kyle-young-2305b032/"
						>
							<FaLinkedin />
						</Link>
					</ListGroup.Item>
					<ListGroup.Item className="footerItem">
						<Link className="footerLink" to="https://github.com/Youngin9210">
							<FaGithubSquare />
						</Link>
					</ListGroup.Item>
					<ListGroup.Item className="footerItem">
						<Link className="footerLink" to="">
							<FaPhone />
						</Link>
					</ListGroup.Item>
				</ListGroup>
			</Col>
		</Container>
	);
}
