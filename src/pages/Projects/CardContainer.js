import React from 'react';
import { Container } from 'react-bootstrap';
import projects from '../../projects';
import CardBody from './CardBody';

export default function CardContainer() {
	return (
		<Container className="row justify-content-center">
			{projects.map((p) => {
				return <CardBody key={p.id} {...p} />;
			})}
		</Container>
	);
}
