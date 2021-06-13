import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderContent from './HeaderContent';
import HeaderImage from './HeaderImage';

export default function Header() {
	return (
		<Container
			id="header"
			className="text-white d-flex flex-column flex-lg-row justify-content-between align-items-center"
		>
			<HeaderContent />
			<HeaderImage />
		</Container>
	);
}
