import React from 'react';
import { Container } from 'react-bootstrap';
import './assets/style/index.css';
import CardContainer from './CardContainer';
const Projects = () => {
	return (
		<Container fluid className="my-3 py-3 text-center">
			<h1>My Work</h1>
			<p className="lead">Take a look at some of my most recent work!</p>
			<CardContainer />
		</Container>
	);
};

export default Projects;
