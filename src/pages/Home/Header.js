import React from 'react';
import { Col, Container } from 'react-bootstrap';
import headerImg from './assets/images/header-img.png';

export default function Header() {
	return (
		<Container
			id="header"
			className="text-white d-flex justify-content-between align-items-center"
		>
			<Col md="6" className="header-content">
				<h2 id="name" className="display-3 mb-0">
					Hello!
				</h2>
				<h2 id="name" className="display-3 mb-0">
					Kyle Young
				</h2>
				<h4 className="display-5">Full Stack Developer</h4>
			</Col>
			<Col md="6" className="header-svg">
				<img src={headerImg} alt="" />
			</Col>
		</Container>
	);
}
