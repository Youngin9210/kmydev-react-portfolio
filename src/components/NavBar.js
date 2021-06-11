import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function NavBar() {
	const [navClass, setNavClass] = useState('');
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	});

	const handleScroll = () => {
		window.pageYOffset > 150
			? setNavClass('navScroll px-3')
			: setNavClass('px-3');
	};

	return (
		<Navbar id="mainNav" variant="dark" expand="lg" className={navClass}>
			<Container>
				<Navbar.Brand href="/">
					KMY<small>dev</small>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="kmyNav" />
				<Navbar.Collapse id="kmyNav" className="justify-content-end">
					<Nav className="mr-auto">
						<Nav.Link href="/home">Home</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
						<Nav.Link href="/projects">Projects</Nav.Link>
						<Nav.Link href="/resume">Resume</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
