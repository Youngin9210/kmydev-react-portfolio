import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';

export default function Hero() {
	return (
		<Container
			fluid
			id="hero"
			className="d-flex justify-content-center align-items-center"
		>
			<div id="overlay"></div>
			<Header />
		</Container>
	);
}
