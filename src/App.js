import React from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import About from './pages/About/index';
import Home from './pages/Home/index';
import NotFound from './pages/Not-Found/index';
import Projects from './pages/Projects/index';
import Resume from './pages/Resume/index';

const App = () => {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path="/home" component={Home}></Route>
				<Route exact path="/about" component={About}></Route>
				<Route exact path="/projects" component={Projects}></Route>
				<Route exact path="/resume" component={Resume}></Route>
				<Route path="/not-found" component={NotFound}></Route>
				<Redirect from="/" exact to="/home" />
				<Redirect to="/not-found" />
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
