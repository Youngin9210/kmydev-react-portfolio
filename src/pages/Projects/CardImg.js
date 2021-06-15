import React from 'react';
import { Card } from 'react-bootstrap';

export default function CardImg({ img }) {
	return <Card.Img variant="top" src={img} />;
}
