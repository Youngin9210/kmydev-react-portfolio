import React from 'react';
import { Container } from 'react-bootstrap';

export default function FreeTime() {
	return (
		<Container id="freeTime">
			<Container>
				<h3>Things I enjoy in my free time include:</h3>
				<ul className="freeTimeList">
					<li>
						<h3>Golf 🏌🏼‍♂️</h3>
					</li>
					<li>
						<h3>Family 👨‍👩‍👧‍👧</h3>
					</li>
					<li>
						<h3>Drinks! 🥃</h3>
					</li>
					<li>
						<h3>Outdoors 🌳</h3>
					</li>
					<li>
						<h3>Building Things! 🛠</h3>
					</li>
				</ul>
			</Container>
		</Container>
	);
}
