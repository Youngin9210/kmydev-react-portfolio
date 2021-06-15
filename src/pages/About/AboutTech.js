import React from 'react';
import { Col } from 'react-bootstrap';
import technologies from '../../utils/technologies';

export default function AboutTech() {
	return (
		<>
			<h2 className="techHeader">Technologies</h2>
			<div className="techRow">
				{Object.keys(technologies).map((key) => (
					<Col key={key} xs={2} className="aboutTech m-3 text-center">
						{technologies[key]}
					</Col>
				))}
			</div>
		</>
	);
}
