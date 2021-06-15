import React from 'react';
import { Container } from 'react-bootstrap';
import AboutImage from './AboutImage';
import AboutSummary from './AboutSummary';

export default function AboutMe() {
	return (
		<Container
			id="about"
			className="d-flex flex-column-reverse flex-lg-row justify-content-bewteen align-items-center"
		>
			<AboutSummary />
			<AboutImage />
		</Container>
	);
}
