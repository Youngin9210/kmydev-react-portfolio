import { DiMongodb } from 'react-icons/di';
import {
	FaBootstrap,
	FaCss3Alt,
	FaGitAlt,
	FaGithub,
	FaHtml5,
	FaJsSquare,
	FaNodeJs,
	FaNpm,
	FaReact,
} from 'react-icons/fa';
import { GrHeroku, GrMysql } from 'react-icons/gr';
import budgetTracker from '../Assets/images/budgetTracker.png';
import lostFound from '../Assets/images/lostFound.png';
import noteTaker from '../Assets/images/noteTaker.png';
import reactEmployeeDirectory from '../Assets/images/reactEmployeeDirectory.png';
import techBlog from '../Assets/images/techBlog.png';
import workoutTracker from '../Assets/images/workoutTracker.png';

const tech = {
	react: <FaReact size="32" className="m-1" />,
	javascript: <FaJsSquare size="32" className="m-1" />,
	nodejs: <FaNodeJs size="32" className="m-1" />,
	css: <FaCss3Alt size="32" className="m-1" />,
	html: <FaHtml5 size="32" className="m-1" />,
	mysql: <GrMysql size="32" className="m-1" />,
	mongodb: <DiMongodb size="32" className="m-1" />,
	git: <FaGitAlt size="32" className="m-1" />,
	bootstrap: <FaBootstrap size="32" className="m-1" />,
	heroku: <GrHeroku size="32" className="m-1" />,
	npm: <FaNpm size="32" className="m-1" />,
	github: <FaGithub size="32" className="m-1" />,
};

const {
	react,
	javascript,
	git,
	nodejs,
	css,
	html,
	mysql,
	mongodb,
	github,
	npm,
	bootstrap,
	heroku,
} = tech;

const projects = [
	{
		id: 1,
		name: 'React Employee Directory',
		img: reactEmployeeDirectory,
		repoURL: 'https://github.com/Youngin9210/REACT-EmployeeDirectory',
		deployedURL: 'https://youngin9210.github.io/REACT-EmployeeDirectory/',
		details: 'Details go here',
		technologies: [
			react,
			javascript,
			github,
			git,
			nodejs,
			npm,
			bootstrap,
			css,
			html,
		],
	},
	{
		id: 2,
		name: 'Budget Tracker',
		img: budgetTracker,
		repoURL: 'https://github.com/Youngin9210/Budget-Tracker',
		deployedURL: 'https://protected-stream-94143.herokuapp.com/',
		details: 'Details go here',
		technologies: [
			javascript,
			github,
			git,
			nodejs,
			npm,
			bootstrap,
			css,
			html,
			heroku,
			mongodb,
		],
	},
	{
		id: 3,
		name: 'Workout Tracker',
		img: workoutTracker,
		repoURL: 'https://github.com/Youngin9210/Workout-Tracker',
		deployedURL:
			'https://fierce-inlet-72161.herokuapp.com/?id=60a81b79b60c910015bdb426',
		details: 'Details go here',
		technologies: [
			javascript,
			github,
			git,
			nodejs,
			npm,
			bootstrap,
			css,
			html,
			heroku,
			mongodb,
		],
	},
	{
		id: 4,
		name: 'Lost & Found',
		img: lostFound,
		repoURL: 'https://github.com/Youngin9210/Lost-Found',
		deployedURL: 'https://glacial-fortress-45860.herokuapp.com/',
		details:
			'A group project designed to allow users help one another by finding lost items throughout the world!',
		technologies: [
			javascript,
			github,
			git,
			nodejs,
			npm,
			bootstrap,
			css,
			html,
			heroku,
			mysql,
		],
	},
	{
		id: 5,
		name: 'Tech Blog',
		img: techBlog,
		repoURL: 'https://github.com/Youngin9210/Tech-Blog',
		deployedURL: 'https://nameless-basin-78183.herokuapp.com/',
		details:
			"An app utilizing MVC file structure to create a 'Tech Blog' where users can interact with one another's blog posts.",
		technologies: [
			javascript,
			github,
			git,
			nodejs,
			npm,
			bootstrap,
			css,
			html,
			heroku,
			mysql,
		],
	},
	{
		id: 6,
		name: 'Note Taker',
		img: noteTaker,
		repoURL: 'https://github.com/Youngin9210/Note-Taker',
		deployedURL: 'https://youngin9210.github.io/Weather-Dashboard/',
		details:
			'Note Taker is an app designed to help a user make notes more accessible without using pen and paper. Take your notes on the go!',
		technologies: [
			javascript,
			nodejs,
			npm,
			css,
			html,
			bootstrap,
			github,
			git,
			heroku,
		],
	},
];

export default projects;
