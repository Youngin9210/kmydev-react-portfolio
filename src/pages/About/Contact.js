import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaPhone } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { Link } from 'react-router-dom';

export default function Contact() {
	return (
		<Container id="contact" className="text-center">
			<h1 className="display-3">Contact Me!</h1>
			<ul className="contactList">
				<li>
					<Link
						className="contactLink"
						to="#"
						onClick={(e) => {
							window.location = 'tel:+19376702584';
							e.preventDefault();
						}}
					>
						<FaPhone size="32" className="m-1" /> (937)-670-2584
					</Link>
				</li>
				<li>
					<Link
						className="contactLink"
						onClick={(e) => {
							window.location =
								'mailto:kyleyoung.9210@gmail.com?subject=Portfolio';
							e.preventDefault();
						}}
					>
						<SiGmail size="32" className="m-1" /> kmydev1719@gmail.com
					</Link>
				</li>
				<li>
					<Link
						className="contactLink"
						to="https://www.linkedin.com/in/kyle-young-2305b032/"
					>
						<FaLinkedin size="32" className="m-1" /> LinkedIn
					</Link>
				</li>
			</ul>
		</Container>
	);
}
