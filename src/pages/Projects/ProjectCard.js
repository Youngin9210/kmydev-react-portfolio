import React from 'react';
import { Card, Col } from 'react-bootstrap';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardImg from './CardImg';

export default function ProjectCard({
	id,
	name,
	img,
	repoURL,
	deployedURL,
	details,
	technologies,
}) {
	return (
		<Col md={5} lg={4} xl={3} className="d-flex justify-content-center m-5">
			<Card
				className="bg-transparent p-3 projectCard"
				style={{ width: 'auto' }}
			>
				<CardImg img={img} />
				<CardBody name={name} details={details} technologies={technologies} />
				<CardFooter repoURL={repoURL} deployedURL={deployedURL} />
			</Card>
		</Col>
	);
}
