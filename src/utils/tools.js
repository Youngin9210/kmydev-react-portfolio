import { BsTerminal } from 'react-icons/bs';
import { FaBootstrap, FaGithub, FaNpm, FaYarn } from 'react-icons/fa';
import { GrHeroku } from 'react-icons/gr';
import { RiAppleLine, RiTrelloLine } from 'react-icons/ri';
import { SiSlack, SiVisualstudio } from 'react-icons/si';
const tools = {
	github: <FaGithub size="80" />,
	npm: <FaNpm size="80" />,
	yarn: <FaYarn size="80" />,
	bootstrap: <FaBootstrap size="80" />,
	heroku: <GrHeroku size="80" />,
	vsCode: <SiVisualstudio size="80" />,
	trello: <RiTrelloLine size="80" />,
	terminal: <BsTerminal size="80" />,
	apple: <RiAppleLine size="80" />,
	slack: <SiSlack size="80" />,
};

export default tools;
