import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CardFooter({ repoURL, deployedURL }) {
	return (
		<Card.Footer>
			<Link to={repoURL} className="btn btn-lg m-2 projectLink">
				Repo
			</Link>
			<Link to={deployedURL} className="btn btn-lg m-2 projectLink">
				App
			</Link>
		</Card.Footer>
	);
}
