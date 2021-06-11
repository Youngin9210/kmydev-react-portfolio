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
const technologies = {
	react: <FaReact />,
	javascript: <FaJsSquare />,
	github: <FaGithub />,
	git: <FaGitAlt />,
	nodejs: <FaNodeJs />,
	npm: <FaNpm />,
	bootstrap: <FaBootstrap />,
	css: <FaCss3Alt />,
	html: <FaHtml5 />,
	heroku: <GrHeroku />,
	mysql: <GrMysql />,
	mongodb: <DiMongodb />,
};

export default technologies;
