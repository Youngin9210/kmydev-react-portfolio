import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<Navbar
			sticky="top"
			id="mainNav"
			variant="dark"
			expand="lg"
			className={`otherNav`}
		>
			<Container>
				<Link to="/home" className="navbar-brand">
					KMY<small>dev</small>
				</Link>
				<Navbar.Toggle aria-controls="kmyNav" />
				<Navbar.Collapse id="kmyNav" className="justify-content-end">
					<Nav className="mr-auto">
						<Link to="/home" className="nav-link">
							Home
						</Link>
						<Link to="/about" className="nav-link">
							About
						</Link>
						<Link to="/projects" className="nav-link">
							Projects
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
