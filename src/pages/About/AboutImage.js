import React from 'react';
import { Col } from 'react-bootstrap';
import aboutImg from './assets//images/aboutImg.png';

export default function AboutImage() {
	return (
		<Col md={8} lg={6} className="imageContainer">
			<img
				src={aboutImg}
				// style={{
				// 	boxShadow: '0px 0px 10px 10px #958ea077',
				// }}
				className="aboutImg"
				alt=""
			/>
		</Col>
	);
}
