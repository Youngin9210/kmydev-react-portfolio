import React from 'react';
import { Container } from 'react-bootstrap';
import './assets/style/index.css';
import CardContainer from './CardContainer';
const Projects = () => {
	return (
		<Container fluid className="my-3 text-center d-flex justify-content-center">
			<CardContainer />
		</Container>
	);
};

export default Projects;
