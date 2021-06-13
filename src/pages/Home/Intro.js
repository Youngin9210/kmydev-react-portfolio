import React from 'react';
import { Container } from 'react-bootstrap';
import IntroContent from './IntroContent';

export default function Intro() {
	return (
		<>
			<Container
				id="intro"
				className="d-flex flex-column-reverse flex-lg-row justify-content-between align-items-center"
			>
				<IntroContent />
				<IntroContent />
			</Container>
		</>
	);
}
