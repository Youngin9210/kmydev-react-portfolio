import React from 'react';
import { Container } from 'react-bootstrap';

export default function FreeTime() {
	return (
		<Container id="freeTime">
			<Container>
				<h3>Things I enjoy in my free time include:</h3>
				<ul className="freeTimeList">
					<li>
						<h3>Golf ๐๐ผโโ๏ธ</h3>
					</li>
					<li>
						<h3>Family ๐จโ๐ฉโ๐งโ๐ง</h3>
					</li>
					<li>
						<h3>Drinks! ๐ฅ</h3>
					</li>
					<li>
						<h3>Outdoors ๐ณ</h3>
					</li>
					<li>
						<h3>Building Things! ๐ </h3>
					</li>
				</ul>
			</Container>
		</Container>
	);
}
