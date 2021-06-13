import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CardBody({
	id,
	name,
	img,
	repoURL,
	deployedURL,
	details,
	technologies,
}) {
	console.log(id, name, img, repoURL, deployedURL, details, technologies);
	return (
		<Col md={4} className="d-flex justify-content-center">
			<Card
				className="bg-transparent my-4 p-2 projectCard"
				style={{ width: '22rem' }}
			>
				<Card.Img variant="top" src={img} />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Text>{details}</Card.Text>
					<Container>{technologies.map((tech) => tech)}</Container>
				</Card.Body>
				<Card.Footer>
					<Link to={repoURL} className="btn btn-lg m-2 projectLink">
						Repo
					</Link>
					<Link to={deployedURL} className="btn btn-lg m-2 projectLink">
						App
					</Link>
				</Card.Footer>
			</Card>
		</Col>
	);
}
