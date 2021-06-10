import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link className="navbar-brand" to="/">
				KMYdev
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item">
						<NavLink className="nav-link" to="/home">
							Home
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/about">
							About
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/projects">
							Projects
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/resume">
							Resume
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}
