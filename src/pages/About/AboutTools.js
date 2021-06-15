import React from 'react';
import { Col, Row } from 'react-bootstrap';
import tools from '../../utils/tools';

export default function AboutTools() {
	return (
		<Row className="techRow">
			<h2 className="">Tools</h2>
			{Object.keys(tools).map((key) => (
				<Col key={key} lg={2} className="aboutTech m-3 text-center">
					{tools[key]}
				</Col>
			))}
		</Row>
	);
}
