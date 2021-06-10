import React from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './pages/About/index';
import Home from './pages/Home/index';
import NotFound from './pages/Not-Found/index';
import Projects from './pages/Projects/index';
import Resume from './pages/Resume/index';

function App() {
	return (
		<Router>
			<NavBar />
			<main className="container">
				<Switch>
					<Route path="/projects/:id" component=""></Route>
					<Route path="/home" component={Home}></Route>
					<Route path="/about" component={About}></Route>
					<Route path="/projects" component={Projects}></Route>
					<Route path="/resume" component={Resume}></Route>
					<Route path="/not-found" component={NotFound}></Route>
					<Redirect from="/" exact to="/home" />
					<Redirect to="/not-found" />
				</Switch>
			</main>
		</Router>
	);
}

export default App;
