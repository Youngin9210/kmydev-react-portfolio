import React from 'react';
import { Col } from 'react-bootstrap';

export default function AboutSummary() {
	return (
		<Col lg={8} className="p-3">
			<h1 className="text-center display-1">Get to know me!</h1>
			<p className="lead">
				Hello, my name is <span className="purple">Kyle Young</span> and I am
				from <span className="purple">Greenville, Ohio</span>! What started out
				as a general curiosity for coding, has quickly turned into a passionate
				obsession! So... I am currently pursuing a certificate in{' '}
				<span className="purple">Full Stack Development</span> by attending a
				full stack coding bootcamp at{' '}
				<span className="purple">The Ohio State University</span>.
			</p>
		</Col>
	);
}
