import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import resume from './assets/resume.pdf';

export default function ResumeBtn() {
	return (
		<Link
			id="resumeBtn"
			to={resume}
			target="_blank"
			className="btn btn-lg d-flex align-items-center"
		>
			<FiDownload className="m-1" /> <span>Resume</span>
		</Link>
	);
}
