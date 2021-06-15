import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import ResumeBtn from './ResumeBtn';

export default function Hero() {
	return (
		<Container
			fluid
			id="hero"
			className="d-flex justify-content-center align-items-center flex-column justify-content-evenly"
		>
			<div id="overlay"></div>
			<Header />
			<ResumeBtn />
		</Container>
	);
}
