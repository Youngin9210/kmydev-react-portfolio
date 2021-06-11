import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export default function NavBar() {
	return (
		<Navbar bg="dark" variant="dark" expand="lg" className="px-3">
			<Navbar.Brand href="/">
				KMY<small>dev</small>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
				<Nav className="mr-auto">
					<Nav.Link href="/home">Home</Nav.Link>
					<Nav.Link href="/about">About</Nav.Link>
					<Nav.Link href="/projects">Projects</Nav.Link>
					<Nav.Link href="/resume">Resume</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
