import React from 'react';
import { Col, Container } from 'react-bootstrap';
import headerImg from './assets/images/header-img.png';

export default function Header() {
	return (
		<Container
			id="header"
			className="text-white d-flex flex-column flex-lg-row justify-content-between align-items-center"
		>
			<Col md={8} lg={6} className="header-content">
				<h2 id="name" className="display-3 mb-0">
					Hello!
				</h2>
				<h2 id="name" className="display-3 mb-0">
					My name is <span>Kyle</span>!
				</h2>
				<h4 className="display-5">Full Stack Developer</h4>
			</Col>
			<Col md={8} lg={6} className="header-svg">
				<div>
					<img src={headerImg} alt="" />
				</div>
			</Col>
		</Container>
	);
}
