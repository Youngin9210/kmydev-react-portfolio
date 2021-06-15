import React from 'react';
import { Col, Row } from 'react-bootstrap';
import technologies from '../../utils/technologies';

export default function AboutTech() {
	return (
		<Row className="techRow">
			<h2 className="">Technologies</h2>
			{Object.keys(technologies).map((key) => (
				<Col key={key} lg={2} className="aboutTech m-3 text-center">
					{technologies[key]}
				</Col>
			))}
		</Row>
	);
}
