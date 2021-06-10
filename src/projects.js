import budgetTracker from './Assets/images/budgetTracker.png';
import reactEmployeeDirectory from './Assets/images/reactEmployeeDirectory.png';
import techBlog from './Assets/images/techBlog.png';
import workoutTracker from './Assets/images/workoutTracker.png';
import technologies from './technologies';

const {
	react,
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
	mongodb,
} = technologies;

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
		name: 'Tech Blog',
		img: techBlog,
		repoURL: 'https://github.com/Youngin9210/Tech-Blog',
		deployedURL: 'https://nameless-basin-78183.herokuapp.com/',
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
			mysql,
		],
	},
];

export default projects;

// {technologies.map((tech) => {
// 	return (
// 		<DevIcon
// 			icon={tech}
// 			key={tech}
// 			style={{ fill: 'black', width: '50px' }}
// 		/>
// 	);
// })}
