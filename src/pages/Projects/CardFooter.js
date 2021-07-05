import React from "react";
import { Card } from "react-bootstrap";

export default function CardFooter({ repoURL, deployedURL }) {
  return (
    <Card.Footer>
      <a href={repoURL} target="_blank" className="btn btn-lg m-2 projectLink">
        Repo
      </a>
      <a
        href={deployedURL}
        target="_blank"
        className="btn btn-lg m-2 projectLink"
      >
        App
      </a>
    </Card.Footer>
  );
}
