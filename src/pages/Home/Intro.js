import React from 'react';
import { Container } from 'react-bootstrap';
import IntroContent from './IntroContent';
import IntroImage from './IntroImage';

export default function Intro() {
	return (
		<>
			<Container
				id="intro"
				className="d-flex flex-column-reverse flex-lg-row justify-content-between align-items-center"
			>
				<IntroContent />
				<IntroImage />
			</Container>
		</>
	);
}
