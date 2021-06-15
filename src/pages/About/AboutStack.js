import React from 'react';
import { Container } from 'react-bootstrap';
import AboutTech from './AboutTech';
import AboutTools from './AboutTools';

export default function AboutStack() {
	return (
		<Container>
			<AboutTech />
			<AboutTools />
		</Container>
	);
}
