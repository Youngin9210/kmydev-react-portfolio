import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function NavBar({ onPageChange }) {
	const [path] = useState(window.location.pathname);
	const [navScroll, setNavScroll] = useState('');
	const [navClass, setNavClass] = useState('');

	useEffect(() => {
		window.addEventListener('load', handlePageChange);
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('load', handlePageChange);
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const handleScroll = () => {
		path === '/home' && window.pageYOffset > 150
			? setNavScroll('navScroll')
			: setNavScroll('');
	};

	const handlePageChange = () => {
		path === '/home' ? setNavClass('homeNav') : setNavClass('otherNav');
	};

	return (
		<Navbar
			sticky="top"
			id="mainNav"
			variant="dark"
			expand="lg"
			className={`${navScroll} ${navClass}`}
		>
			<Container>
				<Navbar.Brand href="/home">
					KMY<small>dev</small>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="kmyNav" />
				<Navbar.Collapse id="kmyNav" className="justify-content-end">
					<Nav className="mr-auto">
						<Nav.Link href="/home">Home</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
						<Nav.Link href="/projects">Projects</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
