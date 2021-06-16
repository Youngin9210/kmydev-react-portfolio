import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import About from './pages/About/index';
import Home from './pages/Home/index';
import Projects from './pages/Projects/index';

const App = () => {
	return (
		<BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
			<NavBar />
			<Switch>
				<Route exact path="" component={Home}></Route>
				<Route exact path="/about" component={About}></Route>
				<Route exact path="/projects" component={Projects}></Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
