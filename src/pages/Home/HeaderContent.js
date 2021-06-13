import React from 'react';
import { Col } from 'react-bootstrap';

export default function HeaderContent() {
	return (
		<Col md={8} lg={6} className="header-content">
			<h2 id="name" className="display-3 mb-0">
				Hello!
			</h2>
			<h2 id="name" className="display-3 mb-0">
				My name is <span className="purple">Kyle</span>!
			</h2>
			<h4 className="display-5">Full Stack Developer</h4>
		</Col>
	);
}
