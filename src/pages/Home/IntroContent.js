import React from 'react';
import { Col } from 'react-bootstrap';

export default function IntroContent() {
	return (
		<Col md={8} lg={6}>
			<h1>Welcome to my portfolio!</h1>
			<p className="lead">
				I am a self-started dev turned into a{' '}
				<span className="purple">Full Stack</span> bootcamper!
			</p>
			<p className="lead">
				My work is mainly focused on <span className="purple">Javascript</span>{' '}
				and the many diverse libraries that come with it.
			</p>
			<p className="lead">
				Currently, my main focus is to continue learning and perfecting{' '}
				<span className="purple">React.js</span>.
			</p>
			<p className="lead">
				Fields that peak my interest include{' '}
				<span className="purple">Front-End</span> and{' '}
				<span className="purple">Full-Stack Development</span>
			</p>
			<button
				className="btn btn-lg"
				data-bs-toggle="modal"
				data-bs-target="#contactModal"
			>
				Contact Me!
			</button>
		</Col>
	);
}
