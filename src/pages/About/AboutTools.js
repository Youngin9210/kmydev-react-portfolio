import React from 'react';
import { Col } from 'react-bootstrap';
import tools from '../../utils/tools';

export default function AboutTools() {
	return (
		<>
			<h2 className="techHeader">Tools</h2>
			<div className="techRow">
				{Object.keys(tools).map((key) => (
					<Col key={key} lg={2} className="aboutTech m-3 text-center">
						{tools[key]}
					</Col>
				))}
			</div>
		</>
	);
}
