import { DiMongodb } from 'react-icons/di';
import {
	FaCss3Alt,
	FaGitAlt,
	FaHtml5,
	FaJsSquare,
	FaNodeJs,
	FaReact,
} from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { IoLogoPwa } from 'react-icons/io5';
const technologies = {
	react: <FaReact size="80" />,
	javascript: <FaJsSquare size="80" />,
	nodejs: <FaNodeJs size="80" />,
	css: <FaCss3Alt size="80" />,
	html: <FaHtml5 size="80" />,
	pwa: <IoLogoPwa size="80" />,
	mysql: <GrMysql size="80" />,
	mongodb: <DiMongodb size="80" />,
	git: <FaGitAlt size="80" />,
};

export default technologies;
