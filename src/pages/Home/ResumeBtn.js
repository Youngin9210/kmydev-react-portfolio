import React from "react";
import { FiDownload } from "react-icons/fi";
import resume from "./assets/resume.pdf";

export default function ResumeBtn() {
  return (
    <a
      id="resumeBtn"
      href={resume}
      target="_blank"
      rel="noreferrer"
      className="btn btn-lg d-flex align-items-center"
    >
      <FiDownload className="m-1" /> <span>Resume</span>
    </a>
  );
}
