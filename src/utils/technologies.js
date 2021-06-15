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
	react: <FaReact size="48" />,
	javascript: <FaJsSquare size="48" />,
	nodejs: <FaNodeJs size="48" />,
	css: <FaCss3Alt size="48" />,
	html: <FaHtml5 size="48" />,
	pwa: <IoLogoPwa size="48" />,
	mysql: <GrMysql size="48" />,
	mongodb: <DiMongodb size="48" />,
	git: <FaGitAlt size="48" />,
};

export default technologies;
