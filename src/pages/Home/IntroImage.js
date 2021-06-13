import React from 'react';
import { Col } from 'react-bootstrap';
import introImg from './assets/images/introImg.png';

export default function IntroImage() {
	return (
		<Col md={8} lg={6} className="d-flex justify-content-center">
			<img src={introImg} alt="" srcset="" className="intro-img" />
		</Col>
	);
}
