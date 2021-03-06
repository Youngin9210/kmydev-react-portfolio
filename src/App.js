import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import About from './pages/About/index';
import Home from './pages/Home/index';
import Projects from './pages/Projects/index';

const App = () => {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path={['/', '/home']} component={Home}></Route>
				<Route exact path="/about" component={About}></Route>
				<Route exact path="/projects" component={Projects}></Route>
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
