import React from 'react';
import { Col } from 'react-bootstrap';
import headshot from './assets/images/headshot.png';

export default function AboutImage() {
	return (
		<Col lg={4} className="d-flex justify-content-center">
			<img
				src={headshot}
				style={{
					maxWidth: '270px',
					maxHeight: '270px',
					boxShadow: '0px 0px 10px 10px #958ea077',
				}}
				className="aboutHeadshot"
				alt=""
			/>
		</Col>
	);
}
