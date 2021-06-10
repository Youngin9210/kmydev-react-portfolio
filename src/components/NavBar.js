import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link className="navbar-brand" to="/">
				KMYdev
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse ms-auto" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link className="nav-link" to="/home">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/about">
							About
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/projects">
							Projects
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/resume">
							Resume
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
