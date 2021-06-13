import React from 'react';
import { Col } from 'react-bootstrap';
import headerImg from './assets/images/header-img.png';

export default function HeaderImage() {
	return (
		<Col md={8} lg={6} className="header-img">
			<img src={headerImg} alt="" />
		</Col>
	);
}
