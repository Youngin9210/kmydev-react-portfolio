import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function IntroContent() {
	return (
		<Col md={8} lg={6}>
			<h1 className="display-4">Welcome to my portfolio!</h1>
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
				<span className="purple">Front-End</span>,{' '}
				<span className="purple">React</span>, and{' '}
				<span className="purple">Full-Stack Development</span>
			</p>
			<Link className="btn btn-lg contactBtn" to="/about#contact">
				Contact Me!
			</Link>
		</Col>
	);
}
