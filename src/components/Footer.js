import React from 'react';
import { Col, Container, ListGroup } from 'react-bootstrap';
import { FaGithubSquare, FaLinkedin, FaPhone } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { Link } from 'react-router-dom';

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
							<FaPhone
								to="#"
								onClick={(e) => {
									window.location = 'tel:+19376702584';
									e.preventDefault();
								}}
							/>
						</Link>
					</ListGroup.Item>
					<ListGroup.Item className="footerItem">
						<Link
							className="footerLink"
							to="#"
							onClick={(e) => {
								window.location =
									'mailto:kyleyoung.9210@gmail.com?subject=Portfolio';
								e.preventDefault();
							}}
						>
							<SiGmail />
						</Link>
					</ListGroup.Item>
				</ListGroup>
			</Col>
		</Container>
	);
}
