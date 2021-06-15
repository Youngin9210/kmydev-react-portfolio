import React from 'react';
import { Col } from 'react-bootstrap';
import headshot from './assets/images/headshot.png';

export default function HeaderImage() {
	return (
		<Col md={8} lg={6} className="header-img">
			<img src={headshot} alt="" className="headshot" />
		</Col>
	);
}
