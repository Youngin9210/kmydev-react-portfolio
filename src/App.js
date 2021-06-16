import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import About from './pages/About/index';
import Home from './pages/Home/index';
import Projects from './pages/Projects/index';

const App = () => {
	return (
		<Router basename="/">
			<NavBar />
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/about" component={About}></Route>
				<Route exact path="/projects" component={Projects}></Route>
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
