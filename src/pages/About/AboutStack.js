import React from 'react';
import { Container } from 'react-bootstrap';
import AboutTech from './AboutTech';
import AboutTools from './AboutTools';

export default function AboutStack() {
	return (
		<Container>
			<h2 className="text-center">
				Below are lists of technologies and tools that I have added to my
				skillset:
			</h2>
			<AboutTech />
			<AboutTools />
		</Container>
	);
}
