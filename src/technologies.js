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
	react: <FaReact size="32" className="m-1" />,
	javascript: <FaJsSquare size="32" className="m-1" />,
	github: <FaGithub size="32" className="m-1" />,
	git: <FaGitAlt size="32" className="m-1" />,
	nodejs: <FaNodeJs size="32" className="m-1" />,
	npm: <FaNpm size="32" className="m-1" />,
	bootstrap: <FaBootstrap size="32" className="m-1" />,
	css: <FaCss3Alt size="32" className="m-1" />,
	html: <FaHtml5 size="32" className="m-1" />,
	heroku: <GrHeroku size="32" className="m-1" />,
	mysql: <GrMysql size="32" className="m-1" />,
	mongodb: <DiMongodb size="32" className="m-1" />,
};

export default technologies;
