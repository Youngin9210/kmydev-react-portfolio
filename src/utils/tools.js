import { BsTerminal } from 'react-icons/bs';
import { FaBootstrap, FaGithub, FaNpm, FaYarn } from 'react-icons/fa';
import { GrHeroku } from 'react-icons/gr';
import { RiAppleLine, RiTrelloLine } from 'react-icons/ri';
import { SiMaterialUi, SiSlack, SiVisualstudio } from 'react-icons/si';

const tools = {
	github: <FaGithub size="48" />,
	npm: <FaNpm size="48" />,
	yarn: <FaYarn size="48" />,
	bootstrap: <FaBootstrap size="48" />,
	mui: <SiMaterialUi size="48" />,
	heroku: <GrHeroku size="48" />,
	vsCode: <SiVisualstudio size="48" />,
	trello: <RiTrelloLine size="48" />,
	terminal: <BsTerminal size="48" />,
	apple: <RiAppleLine size="48" />,
	slack: <SiSlack size="48" />,
};

export default tools;
