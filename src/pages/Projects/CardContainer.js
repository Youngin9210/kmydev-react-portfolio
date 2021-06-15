import React from 'react';
import { Container } from 'react-bootstrap';
import projects from '../../utils/projects';
import ProjectCard from './ProjectCard';

export default function CardContainer() {
	return (
		<Container fluid className="d-flex justify-content-center flex-wrap">
			{projects.map((p) => {
				return <ProjectCard key={p.id} {...p} />;
			})}
		</Container>
	);
}
