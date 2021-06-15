import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';

export default function CardBody({
	id,
	name,
	img,
	repoURL,
	deployedURL,
	details,
	technologies,
}) {
	return (
		<Card.Body>
			<Card.Title>{name}</Card.Title>
			<Card.Text>{details}</Card.Text>
			<Container className="d-flex flex-wrap justify-content-center">
				{technologies.map((tech) => (
					<Col md={2}>{tech}</Col>
				))}
			</Container>
		</Card.Body>
	);
}
